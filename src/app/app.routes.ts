import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';

export const router: Routes = [
  { path: '', component: AuthenticationComponent, children: [
    // { path: '', redirectTo: '/signup', pathMatch: 'full' }
  ]},
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
