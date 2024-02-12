import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientserviceService } from 'src/app/services/clientservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  formResponse: any
  token: any
  editId: any;
  

  constructor(private clientservice: ClientserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    this.editId = this.route.snapshot.paramMap.get('id');
    let request={
      token: this.token,
      _id: this.editId

    }
    this.editData(request)
  }
editData(data:any){
  this.clientservice.postEdit(data).subscribe((result: any)=>{
    this.formResponse = result
  })
}
}
