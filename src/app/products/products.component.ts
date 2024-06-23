import { Component, OnInit } from '@angular/core';
import { iproduct } from '../iproduct';
import { products } from '../products';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  
  id: number = 0;
  products: iproduct[] = products;
  product: iproduct = {} as iproduct;
  addBtns: HTMLElement[] = [];

  constructor(
    private cartService: CartService
  ){}

addToCart(id:number){
  this.product = products[id];
  this.cartService.addToCart(this.product);
}




  ngOnInit(): void {
    
    
  }
}
