import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { routing } from './app.routes';
import { AuthService } from "./shared/auth.service";
import { AuthGuard } from "./shared/auth.guard";
import { HeaderComponent } from './protected/header/header.component';
import { RecipeListComponent } from './protected/recipe-list/recipe-list.component';
import { authRouting } from './authentication/authentication.routes';
import { PasswordResetComponent } from './authentication/password-reset/password-reset.component';
import { protectedRouting } from './protected/protected.routes';
import { EmptyRecipeListComponent } from './protected/empty-recipe-list/empty-recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProtectedComponent,
    AuthenticationComponent,
    HeaderComponent,
    RecipeListComponent,
    PasswordResetComponent,
    EmptyRecipeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    authRouting,
    protectedRouting
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
