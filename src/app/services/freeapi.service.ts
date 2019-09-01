import { Injectable } from '@angular/core';
import {Observable}from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Comment} from '../../app/classes/comment';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private http:HttpClient) { }
  postdata(anspost:Comment){
    return this.http.post("",anspost);
  }
  public  senduid =new Subject<string>();
  sendid=this.senduid.asObservable();
 // public msg=this.senduid.asObservable();
   send(uid:string){
     console.log("send method"+uid);
     this.senduid.next(uid);
   }
   getMessage(): Observable<any> {
    return this.senduid.asObservable();
} 
  
}
