import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 const routes: Routes=[
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'registration',
    component: RegistrationComponent
  },
  {
    path:'Forgot-password',
    component: ForgotPasswordComponent
  }
  
 ]




@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
  RouterModule.forChild(routes), 
  ReactiveFormsModule,

  ]
})
export class NonAuthModule { }
