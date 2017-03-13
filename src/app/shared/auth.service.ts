import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods, AngularFireAuth } from 'angularfire2';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { User } from './user.interface';

@Injectable()
export class AuthService {
  error: any;

  constructor(private auth: AngularFireAuth, public af: AngularFire, private router: Router) { }

  canActivate(): Observable<boolean> {
    return Observable.from(this.auth)
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
        if
          (!authenticated) this.router.navigate(['/login']);
      })
  }

  signupUser(user: User) {
    this.af.auth.createUser({
      email: user.email,
      password: user.password
    }).then(
      (success) => {
        console.log(success);
        this.router.navigate(['/home'])
      }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        }
      )
  }

  loginUser(user: User) {
    return this.af.auth.login({
      email: user.email,
      password: user.password
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    })
  }

  logout() {
    this.af.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
