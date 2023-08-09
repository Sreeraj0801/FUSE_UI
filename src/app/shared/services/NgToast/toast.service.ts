import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) {}
  showSuccess(heading:string, message?:string) {
    this.toastr.success(heading, message);
  }
  showError(heading:string ,message?:string){
    this.toastr.error(heading,message);
  }
}
