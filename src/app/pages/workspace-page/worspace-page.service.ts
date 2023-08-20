import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environmet } from 'src/environment/environment';
import { catchError } from 'rxjs';
import { ProjectData, WorkspceMembers, workspaceResponse } from 'src/app/config/config.types';

@Injectable({
  providedIn: 'root',
})
export class WorspacePageService {
  constructor(private http: HttpClient) {}
  getAllWorksace(userId:string,email:string){
    return this.http.get<workspaceResponse>(`${environmet.baseUrl}workspace/myWorkspaces/${userId}/${email}`);
  }

  getWorkspaceDetails(workspaceId:string,email:string,userId:string){
    return this.http.get<ProjectData[]>(`${environmet.baseUrl}project/${workspaceId}/${email}/${userId}`)
  }

  getAllWorkspaceMembers(workspaceId:string){
    return this.http.get<any>(`${environmet.baseUrl}workspace/details/${workspaceId}`);
  }


}
