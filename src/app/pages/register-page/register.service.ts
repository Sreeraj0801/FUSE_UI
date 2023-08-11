import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterDetailInterface, authResponse } from 'src/app/config/config.types';
import { environmet } from 'src/environment/environment';
import { catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  userRegistration (details:RegisterDetailInterface) {
    return this.http.post<authResponse>(environmet.baseUrl + '/register', details)
    .pipe(
      catchError((error) => {
        console.error('An error occurred:', error);
        throw ('Something went wrong. Please try again later.');
      })
    );
  }
  userGoogleRegistration (details:RegisterDetailInterface) {
    return this.http.post<authResponse>(environmet.baseUrl+"googleRegistration",details)
    .pipe(
      catchError((error) => {
        console.error('GoogleRegistration:', error);
        throw (error.error.error.msg || 'Something went wrong. Please try again later.');
      })
    );
  }
}
