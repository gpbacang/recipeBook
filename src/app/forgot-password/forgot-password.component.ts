import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'rb-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotpwForm: FormGroup;
  error: any

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  // onSendEmail() {
  //   this.authService.sendEmail(this.forgotpwForm.value);
  // }

  ngOnInit() {}
  // ngOnInit(): any {
  //   this.forgotpwForm = this.fb.group({
  //     email: ['', Validators.compose([
  //       Validators.required,
  //       this.isEmail
  //     ])]
  //   })
  // }
  //
  // isEmail(control: FormControl): {[s: string]: boolean} {
  //   if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
  //     return {noEmail: true};
  //   }
  // }

}
