import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectData, TaskDetails } from 'src/app/config/config.types';
import { environmet } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectPageService {

  constructor(private http:HttpClient) { }

  getProjectDetails(projectId:string){
    return this.http.get<ProjectData>(`${environmet.baseUrl}project/details/${projectId}`)
  }
  getAllTasks(projectId:string){
    return this.http.get<TaskDetails[]>(`${environmet.baseUrl}task/${projectId}`)
  }
}
