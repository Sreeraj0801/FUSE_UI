import { Component } from '@angular/core';
import { LoginErrorInterface, LoginDetailsInterface } from 'src/app/config/config.types';
import { LoginPageService } from './login-page.service';
import { FirebaseService } from 'src/app/shared/services/Firebase/firebase.service';
import { ToastService } from 'src/app/shared/services/NgToast/toast.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private loginService:LoginPageService,
              private firebaseService:FirebaseService,
              private toastService:ToastService) { }
  
  details:LoginDetailsInterface = {
    credential:'',
    pword:''
  }
  error:LoginErrorInterface =  {
    credentialError : '',
    pwordError:''
  }

  validateFormat(name:string){
    if(name === 'credential'){
      this.error.credentialError = '';
        const isValid = this.isValidEmailOrMobile(this.details.credential);
        !isValid?this.error.credentialError = "Invalid Format":this.error.credentialError = ''; 
       if(!this.details.credential){
        this.error.credentialError = "Credential cannot be blank"
      }
    }else{
      this.error.pwordError = '';
      if(!this.details.pword ){
        this.error.pwordError = "Password cannot be blank"
      }
    }
  }

  isValidEmailOrMobile(input: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const mobileRegex = /^[0-9]{10}$/;
    return emailRegex.test(input) || mobileRegex.test(input);
  }

  onSubmit() {
    if((!this.error.credentialError&& !this.error.pwordError )&& (this.details.credential && this.details.pword)){
      this.loginService.login(this.details).subscribe((response)=>{
        if(response.response.isVerified){
          this.toastService.showSuccess("User succesfully Logged In")
        }else{this.toastService.showError("Please verify your email")}
        console.log(response);
      },err => {
        console.log({LoginError:err});
        this.toastService.showError( err.error || "user Login Error")})
    }else{
      this.toastService.showError("Invalid Credentials")
    }
  }

  async signInWithGooge() {
      try {
        const userDetail = await this.firebaseService.loginWithGoogle();
        if(userDetail.user.email) {
          this.loginService.googleLogin(userDetail.user.email)
          .subscribe((response)=>{
            this.toastService.showSuccess("User succesfully Logged In")
            console.log(response);
          },err => {this.toastService.showError(err.error.error.msg || "user Login Error")}
          )
        }
      } catch (error:any) {
        this.toastService.showError(error.error || "Error");
        console.error({signInWithGoogeError:error});
      }
    }
  }