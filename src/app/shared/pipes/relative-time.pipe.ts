import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(value: string): string {
    const now = new Date();
    const givenDate = new Date(value);

    const timeDifference = now.getTime() - givenDate.getTime();
    const secondsAgo = Math.floor(timeDifference / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);

    if (secondsAgo < 60) {
      return `${secondsAgo} sec ago`;
    } else if (minutesAgo < 60) {
      return `${minutesAgo} min ago`;
    } else if (hoursAgo < 24) {
      return `${hoursAgo} hr ago`;
    } else if (daysAgo === 0) {
      return 'Today';
    } else if (daysAgo === 1) {
      return 'Yesterday';
    } else {
      return `${daysAgo} days ago`;
    }
  }
}
