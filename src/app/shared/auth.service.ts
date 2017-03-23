import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';

import { User } from './user.interface';

declare var firebase: any;

@Injectable()
export class AuthService {
  error: any;
  // uid: any;

  constructor(private router: Router) {}

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

  getUserId() {
    var user = firebase.auth().currentUser;
    var uid;

    if (user != null) {
      uid = user.uid
    }
    return uid;
  }

  saveUserData(user: User) {
    firebase.database().ref('users/').set({
      userid: this.getUserId(),
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email
    })
  }

  passwordReset(user: User) {
    return firebase.auth().sendPasswordResetEmail(user.email);
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigateByUrl('/login');
  }
}
