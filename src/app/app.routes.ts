import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', component: ProtectedComponent, canActivate: [AuthGuard] }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
