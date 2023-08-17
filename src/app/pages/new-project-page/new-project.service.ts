import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environmet } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class NewProjectService {

  constructor(private _http:HttpClient) { }

  getAllWorkspace(userId:string){
    return this._http.get(`${environmet.baseUrl}workspace/${userId}`)
  }
}
