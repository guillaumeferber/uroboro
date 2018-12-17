import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ComponentsModule } from '../components/components.module';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { AdministrationComponent } from './administration/administration.component';

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    NotFoundComponent,
    LostPasswordComponent,
    ProfileComponent,
    SignupComponent,

    AdministrationComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    MainComponent,
    LoginComponent,
    NotFoundComponent,
    LostPasswordComponent,
    ProfileComponent,
    SignupComponent,
    AdministrationComponent
  ],
})
export class PagesModule { }
