import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterserviceService } from 'src/app/services/registerservice.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  isFormSubmitted: boolean= false
  ForgotForm = new FormGroup({
    email: new FormControl(),
   
  })
  forgotResponse: any
  constructor(private forgotservice: RegisterserviceService) { }

  ngOnInit(): void {
  }
forgotData(data: any){
  this.isFormSubmitted = true
  if(this.ForgotForm.valid){
    let request={
      email: data.email
    }
  
  this.forgotservice.postForgot(request).subscribe((result)=>{
    this.forgotResponse = result
  })
}
}
}
