import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';

import { User } from './user.interface';

declare var firebase: any;

@Injectable()
export class AuthService {
  error: any;

  constructor(private router: Router) {
    // firebase.auth().subscribe(auth => {
    //   if (!auth) {
    //     this.router.navigateByUrl('/login');
    //   }
    // })
  }

  signupUser(user: User) {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
  }

  loginUser(user: User) {
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
  }

  isAuthenticated(): Observable<boolean> {
    const subject = new Subject<boolean>();
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        subject.next(true);
      } else {
        subject.next(false);
      }
    });
    return subject.asObservable();
  }

  passwordReset(user: User) {
    return firebase.auth().sendPasswordResetEmail(user.email);
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigateByUrl('/login');
  }
}
