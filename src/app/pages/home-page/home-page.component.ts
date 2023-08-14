import { Component, OnInit ,OnDestroy} from '@angular/core';
import { GreetingService } from 'src/app/shared/services/Greetings/greetings.service';
import { Store } from '@ngrx/store';
import { selectUserDetails } from 'src/app/shared/ngRx/userDetails.selectors';
import { userDetails } from 'src/app/config/config.types';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  subscription: Subscription | undefined;
  greeting: string = '';
  formattedDate: string = '';
  userDetails?: userDetails;
  constructor(private greetingService: GreetingService, 
              private store: Store) {}
  ngOnInit() {
   this.subscription = this.greetingService.getGreetingData().subscribe((data) => {
      this.greeting = data.greeting;
      this.formattedDate = data.formattedDate;
    });

    this.store.select(selectUserDetails).subscribe((userDetailsData) => {
      this.userDetails = userDetailsData;
    });
  }



  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
