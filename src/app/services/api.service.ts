import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

  getAllSales():Observable<any>
  {
    return this.http.get<any>("http://localhost:3000/saleList");
  }

  addNewSale()
  {
    
  }

  getAllPurchase():Observable<any>
  {
    return this.http.get<any>("http://localhost:3000/purchaseList");
  }

  addNewPurchase(purchaseList:any)
  {
    this.http.post("http://localhost:3000/purchaseList",purchaseList);
  }

  getAllStock():Observable<any>
  {
    return this.http.get<any>("http://localhost:3000/stock");
  }

}
