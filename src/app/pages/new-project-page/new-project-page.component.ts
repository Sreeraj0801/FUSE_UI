import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewProjectService } from './new-project.service';
import { WorkspaceInterface, userDetails, workspaceRequest } from 'src/app/config/config.types';
import { ToastService } from 'src/app/shared/services/NgToast/toast.service';
import { getuserDetails, isEmail } from 'src/app/config/config.function';
import { FormGroup } from '@angular/forms';
import { ReactiveFormService } from 'src/app/shared/services/ReactiveForm/reactive-form.service';

@Component({
  selector: 'app-new-project-page',
  templateUrl: './new-project-page.component.html',
  styleUrls: ['./new-project-page.component.css'],
})
export class NewProjectPageComponent implements OnDestroy, OnInit {
  
  showModal: boolean = false;
  modalHeading: string = 'Create Workspace';
  userDetails?: userDetails;
  workspaces?:WorkspaceInterface[];
    workspaceDetails: workspaceRequest = 
  {
      color: '#fff',
      workspaceName: '',
      masterId: '',
    };

  // for adding Members to workspace
  inviteMembersModal:boolean = false;

  //New Project 
  newProjectGroup:FormGroup;

  constructor(
    private _projectService: NewProjectService,
    private _toast: ToastService,
    private _fromService:ReactiveFormService,
  ) {
    this.newProjectGroup = this. _fromService.createNewProjectForm();
  }

 ngOnInit(): void {
    this.userDetails =  getuserDetails();
    this.getAllWorkspace();
  }

  onFormSubmit() {
    console.log(this.newProjectGroup.valid,this.newProjectGroup.value);
  }

//-------------- From here its the function for workspaces ----------------------
//To get All the workspaces user belongs
  getAllWorkspace() {
    if (this.userDetails?._id) {
      this._projectService.getAllWorkspace(this.userDetails?._id).subscribe(
        (response) => { this.workspaces = response },
        (err) => {
          console.error(' Error while fetching workspaces ', err);
          this._toast.showError(' Something went wrong ');
        }
      );
    } else {
      this._toast.showError('Please Login Again ', 'something went wrong');
    }
  }

  //to handle workspace modal;
  handleModal() {this.showModal = true;}
//-------------------------- Completion of Workspace selection Modal ~ -------------------



// -------------- from here its the functions for Invitation Modal -----------------------
//To open the modal ~ Invitation Modal
handleInviteModal(){
  if(!this.newProjectGroup.get('workspaceName')?.value.length){
    this._toast.showError("Please select a workspace ") ;
    return ;
  }this.inviteMembersModal = true;}


//--------Completed the Invitation Modal----------------------------------------------- 
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
