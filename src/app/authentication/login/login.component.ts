import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/auth.service';
import { User } from '../../shared/user.interface';
import { showError } from '../authentication.animations';

// declare var firebase: any;

@Component({
  selector: 'rb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [showError()]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error = false;
  errorMessage: any;
  loginStatus = "";
  state: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    // firebase.auth.subscribe(auth => {
    //   console.log(auth);
    // });
  }

  onLogin() {
    this.loginStatus = "loading";
    this.authService.loginUser(this.loginForm.value)
    .then(
      (success) => {
        // console.log(success);
        this.loginStatus = "authenticated";
        setTimeout(() => {
          this.router.navigate(['']);
        }, 1000);
      }).catch(
        (err) => {
          var errorCode = err.code;
          this.error = true;
          this.loginStatus = "initial";
          // this.errorMessage = err;
          if (errorCode === 'auth/wrong-password' || errorCode === 'auth/invalid-email') {
            this.errorMessage = 'Invalid email or password.';
          }
          else if (errorCode === 'auth/user-not-found') {
            this.errorMessage = 'User not found.';
          }
          else if (errorCode === 'auth/user-disabled') {
            this.errorMessage = 'Your account has been disabled.';
          }


        }
      )
  }

  ngOnInit(): any {
    this.loginStatus = "initial";
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginForm.valueChanges.subscribe(value => {
      this.error = false;
    });
  }

}
