import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authResponse } from 'src/app/config/config.types';
import { environmet } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class WpInvitationPageService {

  constructor(private _http:HttpClient) { }

  verifyUser(workspaceId:string,email:string,choice:string){
    return this._http.get<authResponse>(`${environmet.baseUrl}workspace/verifyUserinvitationEmail/${workspaceId}/${email}/${choice}`);
  }
}
