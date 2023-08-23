import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ReactiveFormService } from '../../services/ReactiveForm/reactive-form.service';
import { ToastService } from '../../services/NgToast/toast.service';
import { NewTaskService } from './new-task.service';
import { Member} from 'src/app/config/config.types';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit,OnDestroy {
  @Input() taskModal:boolean;
  @Input() projectId:string;
  @Output() taskModalChange:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() taskCreated:EventEmitter<void> = new EventEmitter<void>();
  private httpSubsription:Subscription[] = [];
  newTaskGroup:FormGroup
  members:Member[];

  constructor(private _fromService:ReactiveFormService,
              private _toast:ToastService,
              private _taskService:NewTaskService){                
                this.newTaskGroup = this. _fromService.createNewTask();
              }
              
  onSubmit(){
    this.newTaskGroup.get('projectId')?.setValue(this.projectId);
    if(this.newTaskGroup.valid){
      const subscribe = this._taskService.createTask(this.newTaskGroup.value).subscribe(res => {
        this.taskCreated.emit()
        this.taskModal = false;
        this.taskModalChange.emit(this.taskModal);
        this._toast.showSuccess("task created","successfull");
        this.httpSubsription.push(subscribe);
        this.newTaskGroup.reset();
      })
    }else{this._toast.showError("Please fill out the form")}
  }

  handleMemberChange(email:string){
    const membersControl = this.newTaskGroup.get('members');
    if (membersControl) {
      const currentMembers = membersControl.value as string[];
      if (currentMembers.includes(email)) {
        this._fromService.removeMember(this.newTaskGroup, email);
      } else {
        this._fromService.addMember(this.newTaskGroup, email);
      }
    }  
  }
  ngOnDestroy(): void {
    this.httpSubsription.map((sub)=> sub.unsubscribe());
  }
  ngOnInit(): void {           
    this._taskService.getMembers(this.projectId).subscribe(response => {      
      this.members = response.registerdMembers;      
    },err => console.log(err));
  }
}
