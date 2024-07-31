import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-purchase-list',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule,HttpClientModule],
  providers:[ApiService],
  templateUrl: './purchase-list.component.html',
  styleUrl: './purchase-list.component.scss'
})
export class PurchaseListComponent implements OnInit{

  purchaseList:any[]=[];

  constructor(private api:ApiService)
  {}

  ngOnInit()
  {
    this.getAllPurchase();
  }

  getAllPurchase()
  {
    this.api.getAllPurchase().subscribe(
      (res:any) => {
      this.purchaseList = res;
    },
    (error) => {
      console.error('Error fetching purchase list:', error);
      console.error("Error Occured");
    }
  );
  }

}

