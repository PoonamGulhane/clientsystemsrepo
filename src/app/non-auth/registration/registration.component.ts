import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterserviceService } from 'src/app/services/registerservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  isFormSubmitted: boolean = false
  registerForm= new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  })
  formResponse: any
  constructor(private registerdataservice: RegisterserviceService) { }

  ngOnInit(): void {
  }
registerData(data: any){
  if(this.registerForm.valid){
    let request ={
      "name": data.name,
      "email": data.email,
      "password": data.password
    }
  this.registerdataservice.postRegister(request).subscribe((result)=>{
  this.formResponse = result
  })
  }
 
}
}
