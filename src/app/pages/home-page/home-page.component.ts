import { Component ,OnInit } from '@angular/core';
import { GreetingService } from 'src/app/shared/services/Greetings/greetings.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  greeting:string = '';
  formattedDate:string = '';
  constructor(private greetingService:GreetingService){}
  ngOnInit(){
    const {greeting,formattedDate} = this.greetingService.getGreetingData();
    this.greeting = greeting;
    this.formattedDate = formattedDate;
  }
}
