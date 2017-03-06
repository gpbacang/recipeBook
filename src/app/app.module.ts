import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { routes } from './app.routes';

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
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
