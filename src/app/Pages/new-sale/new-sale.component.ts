import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-new-sale',
  standalone: true,
  imports: [FormsModule,RouterOutlet,RouterLink],
  templateUrl: './new-sale.component.html',
  styleUrl: './new-sale.component.scss'
})
export class NewSaleComponent {

  constructor(private router:Router)
  {}

  onSubmit(newPurchase:NgForm)
  {
    alert("Sale Done Success...");
    this.router.navigate(['layout/sale-list']);
  }

  goToList()
  {
    this.router.navigate(['layout/sale-list']);
  }

}
