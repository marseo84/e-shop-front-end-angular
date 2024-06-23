import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { iproduct } from '../iproduct';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  items: iproduct[] = [];
  total: number = 0;
  itemsCount: number = 0;
  service: number = 0;
  discount: number = 0;
  totalAmount: number = 0;

  constructor(
    private cartService: CartService
  ){

  }




  ngOnInit(): void {
    this.items = this.cartService.getCart();
    this.total = this.cartService.getTotal();
    this.itemsCount = this.items.length;
    this.service = this.cartService.getService(this.total);
    this.discount = this.cartService.getDiscount(this.total);
    this.totalAmount = this.cartService.getTotalAmount(this.total);
  }
}
