import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtectedComponent } from './protected.component';
import { EmptyRecipeListComponent } from './empty-recipe-list/empty-recipe-list.component';


export const PROTECTED_ROUTES: Routes = [
  { path: 'empty', component: EmptyRecipeListComponent }

]

export const protectedRouting: ModuleWithProviders = RouterModule.forRoot(PROTECTED_ROUTES);
