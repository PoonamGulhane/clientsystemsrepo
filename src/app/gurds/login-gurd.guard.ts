import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGurdGuard implements CanActivate {
  isLoggedIn: any
 constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  this.isLoggedIn = sessionStorage.getItem('token')
  if(this.isLoggedIn =='undefined' || this.isLoggedIn ==null){
    this.router.navigate(['non-auth/login'])
   }
     
      return true;
  }
  
}
