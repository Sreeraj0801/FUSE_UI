import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environmet } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class VerifyPageService {
  constructor(private http: HttpClient) {}

  verifyLink(verifyToken: string, userId: string) {    
    return this.http.post(environmet.baseUrl+'verifyLink', {verifyToken, userId }).pipe(
      catchError((error) => {
        console.error(error);
        if(error.error.error.error.message){
          throw ({error :error.error.error.error.message,resend:true})
        }throw ({error:'Something went wrong. Please try again later.'});
      })
    );
  }

  resendVerifyLink(verifyToken: string, userId: string){
    return this.http.post(environmet.baseUrl+'resendVerifyLink', {verifyToken, userId }).pipe(
      catchError((error) => {
        console.log({resendLink:error});
        if(error.error.msg){
          throw({error:error.error.msg})}
        throw ({error:'Something went wrong. Please try again later.'});
      })
    );
  }
}
