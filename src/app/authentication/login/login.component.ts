import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/auth.service';
import { User } from '../../shared/user.interface';

@Component({
  selector: 'rb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error = false;
  errorMessage: any;
  loginStatus = "";

  constructor(private fb: FormBuilder, private authService: AuthService, public af: AngularFire, private router: Router) {}

  onLogin() {
    this.loginStatus = "loading";
    this.authService.loginUser(this.loginForm.value)
    .then(
      (success) => {
        console.log(success);
        this.loginStatus = "authenticated";
        setTimeout(() => {
          this.router.navigate(['']);
        }, 1000);
      }).catch(
        (err) => {
          this.error = true;
          this.errorMessage = err;
          this.loginStatus = "initial";
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
