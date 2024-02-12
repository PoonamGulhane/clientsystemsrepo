import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {

  constructor(private http:HttpClient) { }
  listingUrl ="https://nodejs-free-invoices.onrender.com/clients";
  viewUrl="https://nodejs-free-invoices.onrender.com/client"
  editUrl ="https://nodejs-free-invoices.onrender.com/client";
  postListing(data: any){
    return this.http.post(this.listingUrl, data)
  }
  postViewId(data: any){
    return this.http.post(this.viewUrl, data)
  }
  postEdit(data: any){
    return this.http.post(this.editUrl, data)
  }
}
