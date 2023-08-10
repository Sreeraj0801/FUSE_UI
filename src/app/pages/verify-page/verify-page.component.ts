import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VerifyPageService } from './verify-page.service';
import { ToastService } from 'src/app/shared/services/NgToast/toast.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-verify-page',
  templateUrl: './verify-page.component.html',
  styleUrls: ['./verify-page.component.css'],
})
export class VerifyPageComponent implements OnInit {
  paramasId: string   = '';
  paramsToken: string = '';
  resend:boolean = false;
  constructor(private route: ActivatedRoute,
              private verifyPageSerice:VerifyPageService,
              private toastService: ToastService,
              private router: Router) 
              {    
              this.paramasId = this.route.snapshot.paramMap.get('id') as string;
              this.paramsToken = this.route.snapshot.paramMap.get('token') as string; 
              }

  verifyLink(){
    this.verifyPageSerice.verifyLink(this.paramsToken,this.paramasId).subscribe((response)=>{
      this.toastService.showSuccess("Verified please Login");
      this.router.navigate(['login']);
    },err => {
      console.log(err);
      if(err.resend){this.resend = true;}
      this.toastService.showError(err.error)
    });
  }
  handleLinkResend(){
    this.verifyPageSerice.resendVerifyLink(this.paramsToken,this.paramasId).subscribe((response:any)=>{
      this.toastService.showSuccess(response?.msg);
      this.router.navigate(['login']);
    },err => {
      this.toastService.showError(err.error)      
    })
  }
  handleLogin(){
    this.router.navigate(['login']);  }
  ngOnInit() {
    this.verifyLink()
  }
}
