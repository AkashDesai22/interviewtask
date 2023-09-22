import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

   url:string=" http://localhost:3000/";

  constructor(public http:HttpClient) { };

  getUserData(endpoint:string){

    let getUrl=this.url+endpoint;

    return this.http.get(getUrl);

  }




}
