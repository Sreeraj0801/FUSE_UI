import { Injectable } from '@angular/core';
import { FormArray, FormBuilder,FormGroup,Validators } from '@angular/forms';
import { getuserDetails } from 'src/app/config/config.function';
import { userDetails } from 'src/app/config/config.types';

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormService {
  userDetails:userDetails

  constructor(private formBuilder:FormBuilder) { 
    this.userDetails = getuserDetails()

  }

  createNewProjectForm():FormGroup {
    return this.formBuilder.group({
      projectName:['',Validators.required],
      workspaceName:['',Validators.required],
      masterId:[this.userDetails._id,Validators.required],
      projectDiscription:['',Validators.required],
      projectTheme:['#fff',Validators.required],
      fromDate:['',Validators.required],
      toDate:['',Validators.required],
      members: this.formBuilder.array([]), 
    })
  }

  addMember(form: FormGroup, memberEmail: string) {
    const members = form.get('members') as FormArray;
    members.push(this.formBuilder.control(memberEmail));
  }

  removeMember(form: FormGroup, memberEmail: string) {
    const members = form.get('members') as FormArray;
    const index = members.controls.findIndex(control => control.value === memberEmail);
    if (index !== -1) {
      members.removeAt(index);
    }
  }

  createNewTask():FormGroup{
    return this.formBuilder.group({
      name:['',Validators.required],
      priority:['Low',Validators.required],
      reporter:[this.userDetails._id,Validators.required],
      discription:['',Validators.required],
      from:['',Validators.required],
      to:['',Validators.required],
      projectId:['',Validators.required], 
      members: this.formBuilder.array([]), 
    })
  }

}
