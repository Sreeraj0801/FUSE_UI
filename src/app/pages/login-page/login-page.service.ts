import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environmet } from 'src/environment/environment';
import { LoginDetailsInterface, LoginResInterface } from 'src/app/config/config.types';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  constructor(private http:HttpClient) { }

  login(details:LoginDetailsInterface){
  return this.http.post<LoginResInterface>(environmet.baseUrl+'login',details);
}

googleLogin(email:string){
  return this.http.post<LoginResInterface>(environmet.baseUrl + 'googleSignIn',{email});
}


}