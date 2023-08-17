import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, mergeMap, tap, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUserDetails } from '../../ngRx/userDetails.selectors';
import { environmet } from 'src/environment/environment';
import { updateUserDetails } from '../../ngRx/userDetails.actions';
import { userDetails } from 'src/app/config/config.types';


const excludedURL:string[] = [
  'fuse',
  'login',
  'register'
]

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  accessToken:string = '';
  constructor(private _store:Store,
              private _http:HttpClient) {
                this._store.select(selectUserDetails).subscribe((userDetailsData) => {
                   this.accessToken = userDetailsData.accessToken;                   
                });
              }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let modifiedUrl:HttpRequest<any> = request;
    const url = request.url.split(environmet.baseUrl)[1];
    modifiedUrl = request.clone({withCredentials:true});    
    if(!excludedURL.includes(url)){
      modifiedUrl = modifiedUrl.clone({
        setHeaders:{
          Authorization:`{Bearer ${this.accessToken}}`,
        }
      });
    }    
    return next.handle(modifiedUrl).pipe(
      tap(
        (event) => {
          if(event instanceof HttpResponse){

          }
        },
        (error) => {
          if(error instanceof HttpErrorResponse){
            console.error('Error Occured : ',error);
          }
        }
      ),catchError((error:HttpErrorResponse)=>{
        if(error.status === 403){
           return this.requestNewAccessToken().pipe(
            mergeMap((newToken:string)=>{
              const newData:userDetails = {
                _id: '',
                email:'',
                name:'' ,
                accessToken: newToken,
            };
              this._store.dispatch(updateUserDetails({newData}))
              const retryReq = request.clone({setHeaders:{Authorization:`Bearer ${newToken}`,},})
              return next.handle(retryReq);
            }),catchError((newTokenError) => {
              console.error('Error in refrehing access Token: ',newTokenError);
              throw {error}
              return throwError(error);
            })
           );
        }else{
           throw (error);
        }
      })
    )
  }

  requestNewAccessToken():Observable<string>{
    return this._http.get<string>(environmet.baseUrl+'token')
  }
}


