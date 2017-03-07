import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './login/login.component';

export const router: Routes = [
  { path: '', component: AuthenticationComponent, children: [
    { path: '', redirectTo: 'login', pathMatch: 'full' }
  ]},
  { path: 'login', component: LoginComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
