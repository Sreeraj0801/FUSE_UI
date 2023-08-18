import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WorkspaceInterface, userDetails, workspaceRequest } from 'src/app/config/config.types';
import { ToastService } from '../../services/NgToast/toast.service';
import { CreateWorkspaceService } from './create-workspace.service';
import { getuserDetails } from 'src/app/config/config.function';

@Component({
  selector: 'app-create-workspace',
  templateUrl: './create-workspace.component.html',
  styleUrls: ['./create-workspace.component.css']
})
export class CreateWorkspaceComponent {
  @Input() modalDiaplay:boolean;
  @Output() modalDiaplayChange:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() notify:EventEmitter<void> = new EventEmitter<void>();

  buttonText:string = 'Submit';
  userDetails?: userDetails;
  workspaces?:WorkspaceInterface[];
  selectedWorkspace:string;
  workspaceDetails: workspaceRequest = 
  {
      color: '#fff',
      workspaceName: '',
      masterId: '',
    };


    constructor( private _toast: ToastService,
                private _createWorkspace:CreateWorkspaceService) {
                  this.userDetails =  getuserDetails();
    }

    // To load the members of the workspace upon selecting workspace
    onSubmitCreateWorkspace() {
      if(!this.workspaceDetails.workspaceName){
        this._toast.showError("Workspace Name is mandatory")
        return 
      }
      this.buttonText = 'Loading . . .'
      if (this.userDetails?._id) {
        this.workspaceDetails.masterId = this.userDetails?._id;
        this._createWorkspace.createNewWorkspace(this.workspaceDetails).subscribe((response )=>{
        this.notifyParent();
        this.buttonText = 'Submit';
        this.modalDiaplay = false;      
        this.modalDiaplayChange.emit(this.modalDiaplay)
        this._toast.showSuccess(this.workspaceDetails.workspaceName+' ', response as string);
        },err => {
          console.log('Error from new-project-page.ts:',err);
          this.buttonText = 'Submit'
          this._toast.showError(err.error || "something went wrong");
        })
      } else {
        this._toast.showError('Invalid Id ', 'Please login Again');
        this.buttonText = 'Submit';
      }
    }


    notifyParent() {
      this.notify.emit(); // Emit the event
    }
}
