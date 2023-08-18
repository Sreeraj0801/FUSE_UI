import { Component } from '@angular/core';
import { WorspacePageService } from './worspace-page.service';

@Component({
  selector: 'app-workspace-page',
  templateUrl: './workspace-page.component.html',
  styleUrls: ['./workspace-page.component.css']
})
export class WorkspacePageComponent {

  constructor(private workspaceService:WorspacePageService){}

  handleClick(){
    console.log("its happening");
    this.workspaceService.validateKey().subscribe(response => {
      console.log(response);
    },err => console.log(err))
  }
}
