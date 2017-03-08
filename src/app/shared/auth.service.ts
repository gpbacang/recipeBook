import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { User } from './user.interface';

@Injectable()
export class AuthService {
  error: any;

  constructor(public af: AngularFire, private router: Router) { }

  signupUser(user: User) {
    this.af.auth.createUser({
      email: user.email,
      password: user.password
    }).then(
      (success) => {
        console.log(success);
        this.router.navigate(['/login'])
      }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        }
      )

  }

}
