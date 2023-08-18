import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent {
@Input() text:string ='';
@Output() btnClick = new EventEmitter();

handleClick(){
  this.btnClick.emit();
}
}
