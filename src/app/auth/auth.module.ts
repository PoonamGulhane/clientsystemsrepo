import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from '../non-auth/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientModule } from './client/client.module';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes=[
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path:'client',
  
    loadChildren:()=>import('./client/client.module').then(mod =>mod.ClientModule),
  }
]

@NgModule({
  declarations: [
    AuthComponent,
    ProfileComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ]
})
export class AuthModule { }
