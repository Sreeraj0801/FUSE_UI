import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskDetails, userDetails } from 'src/app/config/config.types';
import { TaskDetailsService } from './task-details.service';
import { getuserDetails } from 'src/app/config/config.function';
import { ToastService } from '../../services/NgToast/toast.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit, OnDestroy {
  [x: string]: any;
  commentText:string = 'comment';
  @Input() task: TaskDetails;
  @Output() statusChange: EventEmitter<void> = new EventEmitter();
  httpSubscription: Subscription[];
  commentHeight: boolean = false;
  userDetails: userDetails;

  constructor(
    private httpService: TaskDetailsService,
    private _toast: ToastService
  ) {}

  handleStatusChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if (value !== this.task.status) {
      //userId,taskId,status
      const subscribe = this.httpService
        .changeStatus(this.userDetails._id, this.task._id, value)
        .subscribe(
          () => {
            this.statusChange.emit();
          },
          (err) => console.log(err)
        );
      this.httpSubscription.push(subscribe);
    }
  }
  ngOnInit(): void {
    this.userDetails = getuserDetails();
  }

  commentHieght() {
    this.commentHeight = !this.commentHeight;
  }

  handleTaskDelete() {
    const subscription = this.httpService.deleteTask(this.task._id).subscribe(
      (response) => {
        this._toast.showSuccess(response as string);
        this.statusChange.emit();
      },
      (err) => console.log(err)
    );
    this.httpSubscription?.push(subscription);
  }

  //userId:string,userName:string,taskId:string,comment:string
  receiveData(data: string) {
    this.commentText = 'posting ...'
    const subscription = this.httpService
      .postComment(
        this.userDetails._id,
        this.userDetails.name,
        this.task._id,
        data
      )
      .subscribe(
        (response) => {
          this.getAllcomments();
          this.commentText = 'comment'
        },
        (err) => {console.log(err); this.commentText = 'comment'}
      );
    subscription && this.httpSubscription?.push(subscription);
  }
  getAllcomments() {
    const subscription = this.httpService
      .fetchAllComments(this.task._id)
      .subscribe(
        (response) => {
          this.task.comments = [...response];
          this['cdRef']?.detectChanges();
        },
        (err) => {
          return err;
          console.log(err);
        }
      );
    this.httpSubscription?.push(subscription);
  }

  ngOnDestroy(): void {
    if (this.httpSubscription?.length) {
      this.httpSubscription.map((subscription) => subscription.unsubscribe());
    }
  }
}
