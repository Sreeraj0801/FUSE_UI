import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input () heading:string = ''
  @Input() isOpen:boolean=false;
  @Output() isOpenChange = new EventEmitter<boolean>(); 
  constructor(){}
  

  closeModal(){
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }
}
