import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FreeapiService}from '../../app/services/freeapi.service';
import {Comment} from '../../app/classes/comment';
import { GoogleloginComponent } from '../googlelogin/googlelogin.component';
import { Subscription } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  sub:Subscription;
  data:any;
  question:any;
  qid:any;
  op1:any;
  op2:any;
  op3:any;
  op4:any;
  i:number=0;
  display:boolean=true;
  v:boolean;
  option:any;
  answers:Array<number>=[];
  uid:any;
  confirm:any;
  ansobj:any={
  //  "uid":this.uid,

    0:{"qid":"1","selected_opt":""},
    1:{"qid":"2","selected_opt":""},
    2:{"qid":"3","selected_opt":""}
    };
    anspost:any=<Comment>this.ansobj;
  constructor(private http:HttpClient,private _api:FreeapiService) { }
   /*selectedvalue(event:any){
     this.option=event.target.value;
   }*/
  nextques(id:any)
  {
    console.log(id);
    this.option=(<HTMLInputElement>document.getElementById(id)).value;
    this.answers[this.i]=this.option;
    this.anspost[this.i].selected_opt=this.option;
    console.log(this.answers);
    console.log(this.anspost);
    this.option=null;
    //this.v=false;
    this.i+=1;
    if(this.i!=this.data.length)
    {
      this.question=this.data[this.i].ques;
      //this.v=false;
      this.op1=this.data[this.i].op1;
      this.op2=this.data[this.i].op2;
      this.op3=this.data[this.i].op3;
      this.op4=this.data[this.i].op4;
      // $("#next").attr("disabled", true);
    }
    else
    {
      this.question=null;
      this.i=null;
      this.display=false;
      this._api.postdata(this.anspost);

    }
  }
  
 // obj:Comment;
 
  ngOnInit() {
    //debugger;
    //this._api.msg.subscribe(data => this.uid=data);
    this.uid=this._api.getuserid();
    console.log(this.uid);
    /*this._api.getMessage().subscribe(data=>{
      console.log(data)
    })*/
    //console.log(this.uid);
    this.http.get("assets/questions.json").subscribe((ques)=>{
      //debugger;
          this.data=ques;
          console.log(this.data);
          this.qid=ques[0].qid;
          this.question=ques[0].ques;
          this.op1=ques[0].op1;
          this.op2=ques[0].op2;
          this.op3=ques[0].op3;
          this.op4=ques[0].op4;
    });
    /*this._api.postdata(this.anspost,this.uid);
    fetch('', {
      method: 'POST',
      body:this.myJSON,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'Accept': 'application/json'
      }
    });
    var opost=new Comment();
    opost.ans1=this.answers[0];
    opost.ans2=this.answers[1];
    opost.ans3=this.answers[2];
    console.log(opost.ans1);
    this._api.postdata(opost).subscribe(
      data =>{
        this.obj=data;
      }
    
    );*/
    /*$(document).ready(() => {
      var q04 = $('input[name="op"]');
      validate();
      $("input[type='radio']").change(validate);

      function validate() {
          if ($(q04).is(':checked')  ) {
              $("#next").removeAttr("disabled", false);
          } else {
              $("#next").attr("disabled", true);
          }
          q04.removeAttr("checked",false);
      }
});*/
  
  
}
}





