import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  constructor(private http: HttpClient ) { }
  registerUrl = "https://nodejs-free-invoices.onrender.com/signup";
  loginUrl = "https://nodejs-free-invoices.onrender.com/login";
  forgotUrl = "https://nodejs-free-invoices.onrender.com/forgotPassword";
  postRegister(data: any){
   return this.http.post(this.registerUrl, data) 
  }
  postLogin(data: any){
    return this.http.post(this.loginUrl, data)
  }
  postForgot(data: any){
    return this.http.post(this.forgotUrl, data)
  }
}
