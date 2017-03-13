import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/auth.service';
import { User } from '../../shared/user.interface';
import { showError } from '../authentication.animations';

@Component({
  selector: 'rb-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css'],
  animations: [showError()]
})
export class PasswordResetComponent implements OnInit {
  passwordResetForm: FormGroup;
  error = false;
  errorMessage: any;
  sendEmailStatus = "";
  state: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  onSendEmail() {
    this.sendEmailStatus = "loading";
    this.authService.passwordReset(this.passwordResetForm.value)
      .then(
        (success) => {
          this.sendEmailStatus = "sent";
        }).catch(
          (err) => {
            var errorCode = err.code;
            this.error = true;
            this.sendEmailStatus = "initial";
            if (errorCode === 'auth/invalid-email') {
              this.errorMessage = 'Invalid email.'
            }
            else if (errorCode === 'auth/user-not-found') {
              this.errorMessage = 'User not found';
            }
          }
        )
  }

  ngOnInit(): any {
    this.sendEmailStatus = "initial";
    this.passwordResetForm = this.fb.group({
      email: ['', Validators.required]
    });
    this.passwordResetForm.valueChanges.subscribe(value => {
      this.error = false;
    })
  }

}
