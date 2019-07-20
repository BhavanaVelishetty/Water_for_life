import { Component, OnInit,NgZone } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
declare const gapi: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:any;
  mail:any;
  constructor(private router:Router,private route:ActivatedRoute,private ngZone:NgZone) { }
  public signOut()
  {
    
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert('signed out.');
    });
    this.name="";
    this.mail="";
    this.ngZone.run(() =>this.router.navigate(['/login'])).then();
   
  }
  ngOnInit() {
    this.route.params.subscribe((params)=>{
       this.name=params['n'];
       this.mail=params['m'];
    })
  }

}
