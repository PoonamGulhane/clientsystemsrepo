import { Component, OnInit } from '@angular/core';
import { ClientserviceService } from 'src/app/services/clientservice.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  formResponse: any
  token: any
  constructor(private clientservice: ClientserviceService) { }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    
    let request={
      page:1,
      per_page:10,
      token: this.token
    }
    this.listingData(request)
  }
listingData(data: any){

  this.clientservice.postListing(data).subscribe((result: any)=>{
    this.formResponse = result?.data;
  })
}
}
