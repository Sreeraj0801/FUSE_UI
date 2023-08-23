import { Component, OnDestroy, OnInit } from '@angular/core';
import { WorspacePageService } from './worspace-page.service';
import { Subscription } from 'rxjs';
import {
  ProjectData,
  RadioCardComponentEMitter,
  WorkspaceInterface,
  WorkspceMembers,
  userDetails,
  workspaceResponse,
} from 'src/app/config/config.types';
import { getuserDetails } from 'src/app/config/config.function';
import { ToastService } from 'src/app/shared/services/NgToast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workspace-page',
  templateUrl: './workspace-page.component.html',
  styleUrls: ['./workspace-page.component.css'],
})
export class WorkspacePageComponent implements OnInit, OnDestroy {
  private userDetaiils: userDetails;
  private httpSubscription: Subscription[] = [];
  ownedWorkspaces: WorkspaceInterface[];
  sharedWorkspaces: WorkspaceInterface[];
  selectedWorkspace:WorkspaceInterface;
  inputText:string = ""
  showModal:boolean = false;
  sharedVisible:boolean = false;
  ownedVisible:boolean = true;
  accordianVisible:boolean = false;
  workspaceDetail:ProjectData[];
  selectedValue:RadioCardComponentEMitter = {name:'',id:'',owner:false};
  wrokspaceMembers:WorkspceMembers[];


  constructor(private workspaceService: WorspacePageService,
              private _toast:ToastService,
              private router:Router) {}

  ngOnInit(): void {
    this.getAllWorkspace();
  }
  handleModal() {this.showModal = true;}


  getAllWorkspace() {
    this.userDetaiils = getuserDetails();
    const subscription = this.workspaceService
      .getAllWorksace(this.userDetaiils._id, this.userDetaiils.email)
      .subscribe(
        (response: workspaceResponse) => {
          this.ownedWorkspaces = response.ownedWorkspaces;
          this.sharedWorkspaces = response.sharedWorkspaces;
        },
        (err) => {console.log({err});}
        );
        this.httpSubscription.push(subscription);
      }

      changeVisiblity(data:string){
        if(data ==='owned'){
          this.ownedVisible = !this.ownedVisible;
        }else {
          this.sharedVisible = !this.sharedVisible;
        }
      }
      showAccordian(){ this.accordianVisible = !this.accordianVisible}

      handleSelectedValue(selectedValue:RadioCardComponentEMitter){
        this.sharedVisible = false;
        this.ownedVisible = false;
        this.accordianVisible = false;
        this.selectedValue= selectedValue ;
        console.log(this.selectedValue.name);
        //workspace Id, userEmail , userId
        const subscription = this.workspaceService.getWorkspaceDetails(selectedValue.id,this.userDetaiils.email,this.userDetaiils._id)
        .subscribe((res)=> {
          this.workspaceDetail = res;
          console.log(this.workspaceDetail);
        },
        err =>{ 
          console.log(err);
          this._toast.showError("Error on fetching data")
        }
        )

        const MembersSubscription = this.workspaceService.getAllWorkspaceMembers(selectedValue.id).subscribe((response)=>{
            this.wrokspaceMembers = response?.members;
        },err => console.log("Error on fetching members"))
        this.httpSubscription.push(subscription);
        this.httpSubscription.push(MembersSubscription);
      }

      handleProjectSelection(id:string,category:boolean){
        console.log(id,category);
        this.router.navigate([`/project/${id}/${category}`]);
      }
  ngOnDestroy(): void {
    this.unsubscribeAll();
  }


  private unsubscribeAll(): void {
    this.httpSubscription.forEach((subscription) => subscription.unsubscribe());
    this.httpSubscription = [];
  }
}
