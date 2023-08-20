import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-accordian-button',
  templateUrl: './accordian-button.component.html',
  styleUrls: ['./accordian-button.component.css']
})
export class AccordianButtonComponent {
  @Input() title: string;
  @Input() isExpanded: boolean;
  @Output() toggleAccordion: EventEmitter<void> = new EventEmitter<void>();

  onToggleAccordion() {
    this.toggleAccordion.emit();
  }

}
