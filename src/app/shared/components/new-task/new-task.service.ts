import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { projectMembers } from 'src/app/config/config.types';
import { environmet } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class NewTaskService {

  constructor(private _http:HttpClient) { }
  getMembers(projectId:string){
    return this._http.get<projectMembers>(`${environmet.baseUrl}project/members/${projectId}`)
  }
  createTask(details:any){
    return this._http.post(`${environmet.baseUrl}task/create`,details)
  }
}
