import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


export const AUTH_ROUTES: Routes = [
  { path: '', component: AuthenticationComponent, children: [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
  ]}
]

export const authRouting: ModuleWithProviders = RouterModule.forRoot(AUTH_ROUTES);
