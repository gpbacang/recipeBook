import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AuthService } from '../../shared/auth.service';
import { showError } from '../authentication.animations';

@Component({
  selector: 'rb-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [showError()]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  error = false;
  errorMessage: any;
  signupStatus = "";
  state: string = "";

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
  }

  onSignup() {
    this.signupStatus = "loading";
    this.authService.signupUser(this.signupForm.value)
    .then(
      (success) => {
        this.authService.saveUserData(this.signupForm.value);
        console.log(success);
        this.signupStatus = "signedUp";
        setTimeout(() => {
          this.router.navigate([''])
        }, 1000);
      }).catch(
        (err) => {
          console.log(err);
          var errorCode = err.code;
          this.error = true;
          this.signupStatus = "initial";

          if (errorCode == 'auth/email-already-in-use') {
            this.errorMessage = "Email is already in use.";
          }
          else if (errorCode == 'auth/invalid-email') {
            this.errorMessage = "Invalid email.";
          }
          else if (errorCode == 'auth/weak-password') {
            this.errorMessage = "Weak password.";
          }
        }
      )
  }

  ngOnInit(): any {
    this.signupStatus = "initial";
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        this.isEmail
      ])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.compose([
        Validators.required,
        this.isEqualPassword.bind(this)
      ])]
    });
    this.signupForm.valueChanges.subscribe(value => {
      this.error = false;
    });
  }

  isEmail(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return {noEmail: true};
    }
  }

  isEqualPassword(control: FormControl): {[s: string]: boolean} {
    if (!this.signupForm) {
      return {passwordsNotMatch: true};
    }
    if (control.value != this.signupForm.controls['password'].value) {
      return {passwordsNotMatch: true};
    }
  }

}
