import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { workspaceRequest } from 'src/app/config/config.types';
import { environmet } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateWorkspaceService {

  constructor(private _http:HttpClient) { }

  createNewWorkspace(details:workspaceRequest){
    return this._http.post<string>(`${environmet.baseUrl}workspace/create`,details)
  }
}
