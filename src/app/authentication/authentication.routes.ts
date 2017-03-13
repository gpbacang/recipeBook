import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';


export const AUTH_ROUTES: Routes = [
  { path: '', component: AuthenticationComponent, children: [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'password-reset', component: PasswordResetComponent }
  ]}
]

export const authRouting: ModuleWithProviders = RouterModule.forRoot(AUTH_ROUTES);
