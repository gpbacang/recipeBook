import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { routing } from './app.routes';
import { AuthService } from "./shared/auth.service";
import { HeaderComponent } from './protected/header/header.component';
import { RecipeListComponent } from './protected/recipe-list/recipe-list.component';
import { authRouting } from './authentication/authentication.routes';

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
    LoginComponent,
    SignupComponent,
    ProtectedComponent,
    AuthenticationComponent,
    HeaderComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing,
    authRouting
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
