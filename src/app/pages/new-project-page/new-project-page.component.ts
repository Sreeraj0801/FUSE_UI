import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewProjectService } from './new-project.service';
import { userDetails } from 'src/app/config/config.types';
import { ToastService } from 'src/app/shared/services/NgToast/toast.service';

@Component({
  selector: 'app-new-project-page',
  templateUrl: './new-project-page.component.html',
  styleUrls: ['./new-project-page.component.css'],
})
export class NewProjectPageComponent implements OnDestroy, OnInit {
  
  constructor(private _projectService: NewProjectService,
              private _toast:ToastService) {}

  getAllWorkspace() {
    const userDetails: any = localStorage.getItem('userDetails');
    const parsedValue: userDetails = JSON.parse(userDetails);
    if(parsedValue?._id){
      this._projectService.getAllWorkspace(parsedValue?._id).subscribe((response) => {
        console.log(response, 'hai');
      },err => {
        console.error(" Error while fetching workspaces ",err);
       this._toast.showError(" Something went wrong ")
      });
    }else{
      this._toast.showError("Please Login Again ", "something went wrong")
    }
  }

  ngOnInit(): void {
    this.getAllWorkspace()
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
