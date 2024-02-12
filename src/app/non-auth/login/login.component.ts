import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterserviceService } from 'src/app/services/registerservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isFormSubmitted: boolean = false
  LoginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
  loginResponse: any
  constructor(private loginservice: RegisterserviceService, private router: Router) { }

  ngOnInit(): void {
  }
loginData(Data: any){
  this.isFormSubmitted =true;
  if(this.LoginForm.valid){
    //let request = {
      //"email": Data.email,
    //  "password": Data.password
    // }
  this.loginservice.postLogin(Data).subscribe((result)=>{
    console.warn(result);
    this.loginResponse = result;
    sessionStorage.setItem('token', this.loginResponse?.data?.token);
    this.router.navigate(['auth/profile']);
  })
}
}
}
