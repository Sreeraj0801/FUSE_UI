import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskDetails } from 'src/app/config/config.types';
import { ProjectPageService } from 'src/app/pages/project-page/project-page.service';

@Component({
  selector: 'app-task-main-card',
  templateUrl: './task-main-card.component.html',
  styleUrls: ['./task-main-card.component.css']
})
export class TaskMainCardComponent {
  @Input() Heading:string;
  @Input() Tasks:TaskDetails[];
  @Output() taskEmiter:EventEmitter<void> = new EventEmitter<void>();
  showModal:boolean = false;
  
  constructor(){}

  handleTaskChange(){
    this.taskEmiter.emit();
  }
  

  ngOnDestroy(): void {
  }

}
