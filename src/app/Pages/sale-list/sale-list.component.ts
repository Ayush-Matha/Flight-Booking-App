import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sale-list',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule,HttpClientModule],
  providers:[ApiService],
  templateUrl: './sale-list.component.html',
  styleUrl: './sale-list.component.scss'
})
export class SaleListComponent implements OnInit{

  saleList:any[]=[];

  constructor(private api:ApiService)
  {}

  ngOnInit()
  {
    this.getAllSale();
  }

  getAllSale()
  {
    this.api.getAllSales().subscribe(
      (res:any) => {
        this.saleList = res;
      },
      (error) => {
        console.error('Error fetching purchase list:', error);
        console.error("Error Occured");
      }
    );
  }

}
