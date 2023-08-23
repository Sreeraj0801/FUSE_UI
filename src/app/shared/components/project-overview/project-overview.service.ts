import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmet } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectOverviewService {
  
  constructor(private http:HttpClient) { }

  getProgress(projectId:string){    
    return this.http.get<number>(`${environmet.baseUrl}task/progress/${projectId}`)
  }
}
