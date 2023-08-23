import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewProjectService } from './new-project.service';
import { WorkspaceInterface, WorkspceMembers, userDetails, workspaceRequest } from 'src/app/config/config.types';
import { ToastService } from 'src/app/shared/services/NgToast/toast.service';
import { getuserDetails, isEmail } from 'src/app/config/config.function';
import { FormGroup } from '@angular/forms';
import { ReactiveFormService } from 'src/app/shared/services/ReactiveForm/reactive-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project-page',
  templateUrl: './new-project-page.component.html',
  styleUrls: ['./new-project-page.component.css'],
})
export class NewProjectPageComponent implements OnDestroy, OnInit {
  showModal: boolean = false;
  modalHeading: string = 'Create Workspace';
  userDetails?: userDetails;
  buttonText:string = "Submit";
  workspaces?:WorkspaceInterface[];
    workspaceDetails: workspaceRequest = 
  {
      color: '#fff',
      workspaceName: '',
      masterId: '',
    };
    workspaceMembers:WorkspceMembers[];

  // for adding Members to workspace
  inviteMembersModal:boolean = false;

  //New Project 
  newProjectGroup:FormGroup;

  constructor(
    private _projectService: NewProjectService,
    private _toast: ToastService,
    private _fromService:ReactiveFormService,
    private  _router:Router,
  ) {
    this.newProjectGroup = this. _fromService.createNewProjectForm();    
  }

 ngOnInit(): void {
    this.userDetails =  getuserDetails();
    this.getAllWorkspace();
  }

  onFormSubmit() {
    if(this.newProjectGroup.valid){
      this.buttonText = 'Loading . . .'
      this._projectService.createProject(this.newProjectGroup.value).subscribe(response => {
        this.buttonText='Submit';
        this._toast.showSuccess(response as string);
        this._router.navigate(['/home'])
      },err => 
        {console.log(err)
        this.buttonText='Submit';}
      )
    }else{this._toast.showError("Please fill out the form")}
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


  refreshMembers(){
    const workspaceId:string = this.newProjectGroup.get('workspaceName')?.value;
    if(workspaceId){
      this.getWorkspaceMembers();
    }else{
      this._toast.showError("Select a workspace") 
    }
  }

  getWorkspaceMembers(){
    const workspaceId:string = this.newProjectGroup.get('workspaceName')?.value;
    if(workspaceId){
      this._projectService.getWorkspaceMembers(workspaceId).subscribe(respone => {
        this.workspaceMembers = respone;
      },err => console.error(err))
    }else{
      this._toast.showError("Select a workspace")
    }
  }

  handleWorkspaceSelection(){
    this.getWorkspaceMembers();
  }

  handleSelectedValue(email: string) {
    const membersControl = this.newProjectGroup.get('members');
    if (membersControl) {
      const currentMembers = membersControl.value as string[];
      if (currentMembers.includes(email)) {
        this._fromService.removeMember(this.newProjectGroup, email);
      } else {
        this._fromService.addMember(this.newProjectGroup, email);
      }
    }    
  }
  
//--------Completed the Invitation Modal----------------------------------------------- 
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}

