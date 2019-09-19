import { Component, OnInit,NgZone } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { FreeapiService } from '../services/freeapi.service';
import { Subscription } from 'rxjs';
declare const gapi: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:any;
  mail:any;
  sub:Subscription;
  sdata:string;
  constructor(private router:Router,private route:ActivatedRoute,private ngZone:NgZone,private  _api:FreeapiService) { }
  public signOut()
  {
    
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert('signed out.');
    });
    this.name="";
    this.mail="";
    this.ngZone.run(() =>this.router.navigate(['/first'])).then();
   
  }
  ngOnInit() {
    //this._api.msg.subscribe(data =>this.name=data);
    //this._api.msg.subscribe(data =>this.mail=data);
    //this.route.params.subscribe((params)=>{
       //this.name=params['n'];
       //this.mail=params['m'];
   // })
   this.name=this._api.getname();
   this.mail=this._api.getmail();
  }

}
