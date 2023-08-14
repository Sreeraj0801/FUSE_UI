export enum GreetingTimes {
  Morning = 'Good Morning',
  Afternoon = 'Good Afternoon',
  Evening = 'Good Evening',
}

import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GreetingService {
  getGreetingData(): Observable<{ greeting: GreetingTimes; formattedDate: string }> {
    return interval(1000).pipe(
      map(() => this.calculateGreetingData())
    );
  }

  private calculateGreetingData(): { greeting: GreetingTimes; formattedDate: string } {    
    const date = new Date();
    let greeting: GreetingTimes;
    let formattedDate = '';    
    const hour = date.getHours();
    if (hour < 12) {
      greeting = GreetingTimes.Morning;
    } else if (hour < 16) {
      greeting = GreetingTimes.Afternoon;
    } else {
      greeting = GreetingTimes.Evening;
    }

    const options = { weekday: 'long', month: 'long', day: 'numeric' } as const;
    formattedDate = date.toLocaleDateString('en-US', options);
    return { greeting, formattedDate };
  }
}
