import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-new-purchase',
  standalone: true,
  imports: [FormsModule,RouterOutlet,RouterLink],
  templateUrl: './new-purchase.component.html',
  styleUrl: './new-purchase.component.scss'
})
export class NewPurchaseComponent {

  purchaseList = {
      "invoiceAmount": 0,
      "invoiceNo": "",
      "productId": 0,
      "purchaseDate": "",
      "purchaseId": 0,
      "quantity": 0,
      "supplierName": "",
      "productName": ""
    };

  constructor(private router:Router)
  {}

  onSubmit(newPurchase:NgForm)
  {
    alert("Purchase List Updated...");
    this.router.navigate(['layout/purchase-list']);
  }

  goToList()
  {
    this.router.navigate(['layout/purchase-list']);
  }

  addNewPurchase()
  {

  }

}
