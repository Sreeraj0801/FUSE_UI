import { Component } from '@angular/core';
import {
  RegisterDetailErrorInterface,
  RegisterDetailInterface,
} from 'src/app/config/config.types';
import { ToastService } from 'src/app/shared/services/NgToast/toast.service';
import { RegisterService } from './register.service';
import { FirebaseService } from 'src/app/shared/services/Firebase/firebase.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  details: RegisterDetailInterface = {
    email: '',
    mobile: '',
    name: '',
    pword: '',
    confirmPword: '',
  };
  error: RegisterDetailErrorInterface = {
    confirmPwordError: '',
    emailError: '',
    mobileError: '',
    nameError: '',
    pwordError: '',
  };

  constructor(
    private toastService: ToastService,
    private registerService: RegisterService,
    private firebaseService: FirebaseService
  ) {}

  handleValidation(field: string) {
    if (field === 'name') {
      !this.details.name
        ? (this.error.nameError = 'Name field cannot be empty')
        : (this.error.nameError = '');
    }
    if (field === 'email') {
      !this.details.email
        ? (this.error.emailError = 'Email field cannot be empty')
        : (this.error.emailError = '');
    }
    if (field === 'email') {
      if (!this.details.email) {
        this.error.emailError = 'Email field cannot be empty';
      } else {
        const isValid = this.isValidEmai(this.details.email);
        isValid
          ? (this.error.emailError = '')
          : (this.error.emailError = 'Invalid Email Format');
      }
    }
    if (field === 'mobile') {
      if (!this.details.mobile) {
        this.error.mobileError = 'Mobile field cannot be empty';
      } else {
        const isValid = this.isValidMobile(this.details.mobile);
        isValid
          ? (this.error.mobileError = '')
          : (this.error.mobileError = 'Invalid Mobile Number Format');
      }
    }
    if (field === 'pword' && this.details.pword !== undefined) {
      if (!this.details.pword.trim()) {
        this.error.pwordError = 'password field cannot be empty';
      } else if (this.details.pword.trim().length < 6) {
        this.error.pwordError = 'password should be more than 6';
      } else {
        this.error.pwordError = '';
      }
    }
    if (field === 'confirmPwrd' && this.details.pword !== undefined) {
      this.details.pword.trim() !== this.details.confirmPword
        ? (this.error.confirmPwordError = 'password doesnot match')
        : (this.error.confirmPwordError = '');
    }
  }

  isValidEmai(input: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(input);
  }
  isValidMobile(input: string): boolean {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(input);
  }

  onSubmit() {
    if (
      this.details.name &&
      this.details.email &&
      this.details.mobile &&
      this.details.pword &&
      !this.error.nameError &&
      !this.error.emailError &&
      !this.error.mobileError &&
      !this.error.pwordError &&
      !this.error.confirmPwordError
    ) {
      this.registerService.userRegistration(this.details).subscribe(
        (value) => {
          console.log(value);
          this.toastService.showSuccess('all correct');
        },
        (err) => {
          console.log(err);
          this.toastService.showError(err.error || 'Registration Error');
          console.log({ registerError: err });
        }
      );
    } else {
      this.toastService.showError('Clear up the form', 'Invalid Credentials');
    }
  }

  //handle Google SignIn
  async handleGoogleSignIn() {
    const userDetails = await this.firebaseService.loginWithGoogle();
    const {
      user: { displayName, email },
    } = userDetails;
    const details = { displayName , email: email || 'email' };
    this.registerService.userGoogleRegistration(details).subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log({googleRegistrationError:err})
        this.toastService.showError(err||
          err.error.error.msg ||err.error.error.error.message ||
          'Google Registration failed'
        );
      }
    );
  }
}
