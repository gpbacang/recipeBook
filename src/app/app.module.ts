import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { routes } from './app.routes';
import { AuthService } from "./shared/auth.service";

export const firebaseConfig = {
  apiKey: "AIzaSyAqucMLcNkZTVRTMJswa2piE2xL4HFFMnU",
  authDomain: "recipe-book-74cc3.firebaseapp.com",
  databaseURL: "https://recipe-book-74cc3.firebaseio.com",
  storageBucket: "recipe-book-74cc3.appspot.com",
  messagingSenderId: "473734993373"
}

@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    LoginComponent,
    SignupComponent,
    ProtectedComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
