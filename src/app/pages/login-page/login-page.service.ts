import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environmet } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  constructor(private http:HttpClient) { }

  login(details:any){
  return this.http.post<any>(environmet.baseUrl+'login',details)
}

googleLogin(email:string){
  return this.http.post<any>(environmet.baseUrl + 'googleSignIn',{email})
}


}