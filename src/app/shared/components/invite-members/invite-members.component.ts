import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastService } from '../../services/NgToast/toast.service';
import { isEmail } from 'src/app/config/config.function';
import { InviteMembersService } from './invite-members.service';

@Component({
  selector: 'app-invite-members',
  templateUrl: './invite-members.component.html',
  styleUrls: ['./invite-members.component.css']
})
export class InviteMembersComponent {
  @Input() modal:boolean = false;
  @Output() modalChange = new EventEmitter<boolean>();
  @Input() workspaceId:string

  invitationMembers:string[] = [];
  invitationEmail:string = ''
  invitationEmailError:string = '';

  constructor(private _toast:ToastService,
              private inviteMembersService:InviteMembersService){}



  //To add Multiple email by clicking space or Enter key
onKeyPress(event:KeyboardEvent){
  this.invitationEmail = this.invitationEmail.trim();
  this. invitationEmailError = '';
  if (event.key === ' ' || event.key === 'Enter') {
     const respone:boolean = isEmail(this.invitationEmail);
     if(respone && this.invitationMembers.includes(this.invitationEmail)){
      this. invitationEmailError = 'Email Already Exist';
      return 
     }else if(respone){
      this.invitationMembers.push(this.invitationEmail);
      this.invitationEmail = ''
     }else{
        this. invitationEmailError = 'Invalid Email Format';
     }
  }
}

//Remove Member form slected emails 
removeMember(email:string){
  this.invitationMembers = this.invitationMembers.filter( member => email!= member)
}
//On submit send Email Invitation maill to members.
onSubmitInviteToWorkspace(){
  if(this.workspaceId.length){
    if(this.invitationMembers.length){
      const details = {tags:this.invitationMembers,workSpaceId:this.workspaceId}
      this.inviteMembersService.InviteMembersToWorkspace(details).subscribe(response => {
        this._toast.showSuccess(response as string);
        this.modal = false;
        this.modalChange.emit(this.modal);
      },err => {console.error(err);})
    }else {this._toast.showError("Add atleast one email ")}
  }else{this._toast.showError("select a workspace")}
}

}
