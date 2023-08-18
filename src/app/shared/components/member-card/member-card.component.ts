import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WorkspceMembers } from 'src/app/config/config.types';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent {
  @Input() member: WorkspceMembers;
  @Input() isDisabled: boolean;
  @Output() selectedValue:EventEmitter<string> = new EventEmitter<string>();


  handleCheckboxClick() {
    if (this.member.status === 'accepted') {
      this.selectedValue.emit(this.member.email);
    }
  }

}
