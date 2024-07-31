import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  providers:[ApiService],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss'
})
export class StockComponent {
  stockList:any[]=[];

  constructor(private api:ApiService)
  {}

  ngOnInit()
  {
    this.getAllStock();
  }

  getAllStock()
  {
    this.api.getAllStock().subscribe(
      (res:any) => {
        this.stockList = res;
      }
    );
  }

}
