import { Injectable } from '@angular/core';
import {Observable}from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Comment} from '../../app/classes/comment';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private http:HttpClient) { }
  postdata(anspost:Comment){
    return this.http.post("",anspost);
  }
  public  senduid =new BehaviorSubject<string>("default data");
  public msg=this.senduid.asObservable();
  ruid:string;
  rname:string;
  rmail:string;
   senduserid(uid){
     console.log("send method"+uid);
     //this.senduid.next(uid);
     this.ruid=uid;
   }
   getuserid() {
    //this.msg.subscribe(data =>this.ruid=data);
     return this.ruid;
  } 
  sendname(name)
  {
    //this.senduid.next(name);
    this.rname=name;
  }
  getname(){
    //this.msg.subscribe(data =>this.rname=data);
    return this.rname;
  }
  sendmail(mail){
   // this.senduid.next(mail);
    this.rmail=mail;
  }
  getmail()
  {
    //this.msg.subscribe(data =>this.rmail=data);
    return this.rmail;
  }
}
