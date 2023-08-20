import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-min-card',
  templateUrl: './min-card.component.html',
  styleUrls: ['./min-card.component.css']
})
export class MinCardComponent {
  @Input() text:string|number|boolean;
  @Input() heading:string;

}
