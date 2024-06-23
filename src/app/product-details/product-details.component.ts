import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iproduct } from '../iproduct';
import { products } from '../products';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  id: number = 0;
  product: iproduct = {} as iproduct;


  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ){  }

  addToCart() {
    this.cartService.addToCart(this.product);
    console.log(this.cartService.getCart());
    
  }

  ngOnInit(): void {
   
    this.id = +this.route.snapshot.params["i"];
    this.product = products[this.id];
    
  }
}
