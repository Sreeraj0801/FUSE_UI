import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-project-tab',
  templateUrl: './project-tab.component.html',
  styleUrls: ['./project-tab.component.css']
})
export class ProjectTabComponent {
selectedTab:string='overview';
@Output() tabEmitter:EventEmitter<string> = new EventEmitter<string>(); 

  handleTabSelection(tab:string){
    this.selectedTab = tab;
    this.tabEmitter.emit(this.selectedTab);
  }
}
