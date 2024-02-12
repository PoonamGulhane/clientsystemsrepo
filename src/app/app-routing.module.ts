import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonAuthModule } from './non-auth/non-auth.module';
import { AuthModule } from './auth/auth.module';
import { LoginGurdGuard } from './gurds/login-gurd.guard';
import { NonlogingurdGuard } from './gurds/nonlogingurd.guard';

const routes: Routes = [
  {
    path:'non-auth',
    loadChildren:()=>import('./non-auth/non-auth.module').then(mod=>mod.NonAuthModule ),
    canActivate:[NonlogingurdGuard]
  },
  {
  path:'auth',
  loadChildren:()=>import('./auth/auth.module').then(mod =>mod.AuthModule),
  canActivate:[LoginGurdGuard]
},
{
  path:'',
  redirectTo: 'non-auth/login',
  pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
