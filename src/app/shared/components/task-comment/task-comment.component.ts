import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-comment',
  templateUrl: './task-comment.component.html',
  styleUrls: ['./task-comment.component.css']
})
export class TaskCommentComponent {
  userInput: string = '';
  @Input() text:string = 'comment'

  @Output() dataSent = new EventEmitter<string>();

  sendData() {
    if (this.userInput) {
      const formattedHtml = `<p>${this.userInput}</p>`;
      this.dataSent.emit(formattedHtml);
    }
  }
}
