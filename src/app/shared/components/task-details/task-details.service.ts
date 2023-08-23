import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from 'src/app/config/config.types';
import { environmet } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskDetailsService {

  constructor(private http:HttpClient) { }
  //userId,taskId,status
  changeStatus(userId:string,taskId:string,status:string){
    return this.http.patch(`${environmet.baseUrl}task/updateStatus`,{userId,taskId,status})
  }

  deleteTask(taskId:string){
  return this.http.delete(`${environmet.baseUrl}task/delete/${taskId}`)
  }

  postComment(userId:string,userName:string,taskId:string,comment:string){
    return this.http.post<any>(environmet.baseUrl+'task/postComment',{userId,userName,taskId,comment})
  }
  fetchAllComments(taskId:string){
    return this.http.get<Comment[]>(`${environmet.baseUrl}task/comments/${taskId}`);
  }
}
