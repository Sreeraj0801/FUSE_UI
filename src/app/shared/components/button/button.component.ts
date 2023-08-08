import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Output() btnClick = new EventEmitter<string>();
  @Input() design?: string;
  @Input() text?:string;

  handleBtnClick() {
    this.btnClick.emit();
  }
}
