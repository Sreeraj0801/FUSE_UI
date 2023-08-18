import { Injectable } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormService {

  constructor(private formBuilder:FormBuilder) { }

  createNewProjectForm():FormGroup {
    return this.formBuilder.group({
      projectName:['',Validators.required],
      workspaceName:['',Validators.required],
      masterId:['',Validators.required],
      projectDiscription:['',Validators.required],
      projectTheme:['#fff',Validators.required],
      fromDate:['',Validators.required],
      toDate:['',Validators.required],
      members:[[]],
    })
  }
}
