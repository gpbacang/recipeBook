import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'rb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: any;

  constructor(private fb: FormBuilder, private authService: AuthService, public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => {
      this.router.navigateByUrl('/home');
    })
  }

  onLogin() {
    this.authService.loginUser(this.loginForm.value);
  }

  ngOnInit(): any {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
