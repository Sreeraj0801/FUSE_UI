import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environmet } from 'src/environment/environment';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorspacePageService {
  constructor(private http: HttpClient) {}

  validateKey() {
    return this.http.get(environmet.baseUrl + 'testCase',{withCredentials:true}).pipe(
      catchError((error) => {
        console.error('An error while button click:', error);
        throw ('Something went wrong. Please try again later.');
      })
    );
  }
}
