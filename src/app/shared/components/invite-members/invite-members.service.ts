import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environmet } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class InviteMembersService {

  constructor(private _http:HttpClient) { }
  
  InviteMembersToWorkspace(details:{tags:string[],workSpaceId:string}){
    return this._http.post(`${environmet.baseUrl}workspace/invite`,details);
  }
}
