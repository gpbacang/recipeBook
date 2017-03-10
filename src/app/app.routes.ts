import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthService } from './shared/auth.service';

export const APP_ROUTES: Routes = [
  { path: '', component: ProtectedComponent, canActivate: [AuthService] }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
