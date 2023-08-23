import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectPageService } from './project-page.service';
import { Subscription } from 'rxjs';
import { ProjectData, TaskDetails } from 'src/app/config/config.types';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  private httpSubscription: Subscription[] = [];
  tab:string = 'overview';
  projectId:string;
  category:string;
  modalView:boolean = false;
  projectDetail:ProjectData;
  pendingTask:TaskDetails[];
  ongoingTask:TaskDetails[];
  completedTask:TaskDetails[];

constructor(private activateRoute:ActivatedRoute,
            private projectService:ProjectPageService){}
  ngOnInit(): void {
    this.getParams();
    this.getProjectDetails();
    this.getTasks();
  }


  getTasks(){
    const subscribe = this.projectService.getAllTasks(this.projectId).subscribe(response => {
      this.filterTask(response)
    },err => console.log(err))
    this.httpSubscription.push(subscribe);
  }
  filterTask(Taskresponse:TaskDetails[]){
    this.ongoingTask = Taskresponse.filter((task)=> task.status === 'ongoing');
    this.pendingTask = Taskresponse.filter((task)=> task.status === 'pending');    
    this.completedTask = Taskresponse.filter((task)=> task.status === 'completed');    
  }

  
  handleTab(tabView:string){
    this.tab  = tabView;        
  }

  handleTaskCreatioin(){
    this.getTasks(); 
    this.modalView = false;
  }
  getProjectDetails(){
    const subscription = this.projectService.getProjectDetails(this.projectId).subscribe(response => {
      this.projectDetail = response;      
    },err=>console.log(err))
    this.httpSubscription.push(subscription);
  }
  getParams(){
    this.activateRoute.paramMap.subscribe(params => {
      this.projectId= params.get('projectId') || '';
      this.category = params.get('category') || '';
      });
  }

  handleNewTask(){
    this.modalView = !this.modalView;
  }
  handleTaskChange(){
    this.getTasks()
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }
  private unsubscribeAll(): void {
    this.httpSubscription.forEach((subscription) => subscription.unsubscribe());
    this.httpSubscription = [];
  }
}
