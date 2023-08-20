  import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RadioCardComponentEMitter } from 'src/app/config/config.types';

  @Component({
    selector: 'app-radio-card',
    templateUrl: './radio-card.component.html',
    styleUrls: ['./radio-card.component.css']
  })
  export class RadioCardComponent {
  @Input() id:string ;
  @Input() name:string;
  @Input() owner:boolean;
  @Output() selectedValue:EventEmitter<RadioCardComponentEMitter> = new EventEmitter<RadioCardComponentEMitter>(true);

  onSelect(){    
    this.selectedValue.emit({id:this.id,name:this.name,owner:this.owner});
  }  

  }
