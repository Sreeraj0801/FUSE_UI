import { Component } from '@angular/core';
import {
  LoginErrorInterface,
  LoginInterface,
  userDetails,
} from 'src/app/config/config.types';
import { LoginPageService } from './login-page.service';
import { FirebaseService } from 'src/app/shared/services/Firebase/firebase.service';
import { ToastService } from 'src/app/shared/services/NgToast/toast.service';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import {
  removeUserDetails,
  addUserDetails,
} from 'src/app/shared/ngRx/userDetails.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(
    private loginService: LoginPageService,
    private firebaseService: FirebaseService,
    private toastService: ToastService,
    private router: Router,
    private store: Store
  ) {}

  details: LoginInterface = {
    credential: '',
    pword: '',
  };
  error: LoginErrorInterface = {
    credentialError: '',
    pwordError: '',
  };

  validateFormat(name: string) {
    if (name === 'credential') {
      this.error.credentialError = '';
      const isValid = this.isValidEmailOrMobile(this.details.credential);
      !isValid
        ? (this.error.credentialError = 'Invalid Format')
        : (this.error.credentialError = '');
      if (!this.details.credential) {
        this.error.credentialError = 'Credential cannot be blank';
      }
    } else {
      this.error.pwordError = '';
      if (!this.details.pword) {
        this.error.pwordError = 'Password cannot be blank';
      }
    }
  }

  isValidEmailOrMobile(input: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const mobileRegex = /^[0-9]{10}$/;
    return emailRegex.test(input) || mobileRegex.test(input);
  }

  onSubmit() {
    if (
      !this.error.credentialError &&
      !this.error.pwordError &&
      this.details.credential &&
      this.details.pword
    ) {
      this.loginService.login(this.details).subscribe(
        (response) => {
          const newData:userDetails = {
              _id: response.response._id ,
              email: response.response.email,
              name: response.response.name ,
              accessToken: response.accessToken,
          };
          this.store.dispatch(addUserDetails({ newData }));
          this.router.navigate(['/home']);
          this.toastService.showSuccess(
            `${response.response.name} logged in succesfully`,
            'Successfull'
          );
        },
        (err) => {
          console.log({ LoginError: err });
          this.toastService.showError(err.error || 'user Login Error');
        }
      );
    } else {
      this.toastService.showError('Invalid Credentials');
    }
  }

  async signInWithGooge() {
    try {
      const userDetail = await this.firebaseService.loginWithGoogle();
      if (userDetail.user.email) {
        this.loginService.googleLogin(userDetail.user.email).subscribe(
          (response) => {
            this.toastService.showSuccess('User succesfully Logged In');
          },
          (err) => {
            this.toastService.showError(
              err.error.error.msg || 'user Login Error'
            );
          }
        );
      }
    } catch (error: any) {
      this.toastService.showError(error.error || 'Error');
      console.error({ signInWithGoogeError: error });
    }
  }
}
