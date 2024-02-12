import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientserviceService } from 'src/app/services/clientservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  viewResponse: any
  token: any
  viewId: any;
  date: any;
  constructor(private clientservice: ClientserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    this.viewId = this.route.snapshot.paramMap.get('id')
    let request={
      token: this.token,
      _id: this.viewId,
     
    }
    this.viewData(request)
  }
viewData(data: any){
  this.clientservice.postViewId(data).subscribe((result: any)=>{
    this.viewResponse= result?.data[0]
  })
}

}
