import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environmet } from 'src/environment/environment';
import { CreateProjectForm, WorkspaceInterface, WorkspceMembers, workspaceRequest } from 'src/app/config/config.types';

@Injectable({
  providedIn: 'root'
})
export class NewProjectService {

  constructor(private _http:HttpClient) { }

  getAllWorkspace(userId:string){
    return this._http.get<WorkspaceInterface[]>(`${environmet.baseUrl}workspace/${userId}`)
  }
  getWorkspaceMembers(workspaceId:string){
    return this._http.get<WorkspceMembers[]>(`${environmet.baseUrl}workspace/members/${workspaceId}`);
  }
  createProject(details:CreateProjectForm){
    return this._http.post(`${environmet.baseUrl}project/create`,details)
  }
}
