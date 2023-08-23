import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ProjectTaskService } from './project-task.service';
import { Subscription } from 'rxjs';
import { TaskDetails } from 'src/app/config/config.types';

@Component({
  selector: 'app-project-task',
  templateUrl: './project-task.component.html',
  styleUrls: ['./project-task.component.css']
})
export class ProjectTaskComponent implements OnInit,OnDestroy {
  @Input() Id:string;
  private httpSubscription: Subscription[] = [];
  @Input() pendingTask:TaskDetails[];
  @Input() ongoingTask:TaskDetails[];
  @Input() completedTask:TaskDetails[];
  @Output() taskEmitter:EventEmitter<void> = new EventEmitter<void>();


  constructor(){}
  ngOnInit(): void {}


  ngOnDestroy(): void {
    this.unsubscribeAll();
  }
  handleTaskEmiter(){
    this.taskEmitter.emit();
  }

  private unsubscribeAll(): void {
    this.httpSubscription.forEach((subscription) => subscription.unsubscribe());
    this.httpSubscription = [];
  }

}
