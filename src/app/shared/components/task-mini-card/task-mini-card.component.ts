import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskDetails } from 'src/app/config/config.types';

@Component({
  selector: 'app-task-mini-card',
  templateUrl: './task-mini-card.component.html',
  styleUrls: ['./task-mini-card.component.css'],
})
export class TaskMiniCardComponent {
  @Input() task: TaskDetails;
  @Output() taskChange: EventEmitter<void> = new EventEmitter<void>();
  showModal:boolean = false;

  handleClick() {
    this.showModal = !this.showModal;   
  }
  handleStatusChange(){
    this.taskChange.emit();
  }
}
