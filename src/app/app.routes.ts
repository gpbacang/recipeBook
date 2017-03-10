import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProtectedComponent } from './protected/protected.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthService } from './shared/auth.service';

export const router: Routes = [
  { path: '', component: AuthenticationComponent, children: [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent }
  ]},
  { path: 'home', component: ProtectedComponent, canActivate: [AuthService] }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
