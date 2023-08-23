import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProjectOverviewService } from './project-overview.service';
import { Subscription } from 'rxjs';
import { ProjectData } from 'src/app/config/config.types';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css'],
})
export class ProjectOverviewComponent implements OnInit, OnDestroy {
  @Input() Id: string;
  @Input() details: ProjectData;
  private httpSubscription: Subscription[] = [];
  progress: number;

  constructor(private overviewservice: ProjectOverviewService) {}
  ngOnInit(): void {
    this.getProgress();
  }
  getProgress() {
    if (!this.progress) {
      const subscribe = this.overviewservice.getProgress(this.Id).subscribe(
        (response) => {
          this.progress = response;
          console.log(response);
        },
        (err) => console.log(err)
      );
      this.httpSubscription.push(subscribe);
    }
  }
  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  private unsubscribeAll(): void {
    this.httpSubscription.forEach((subscription) => subscription.unsubscribe());
    this.httpSubscription = [];
  }
}
