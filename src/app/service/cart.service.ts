import { Injectable } from '@angular/core';
import { iproduct } from '../iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: iproduct[] = [];


  constructor() { }

  addToCart(product: iproduct) {
    if (product.availability === true) {
      this.cart.push(product);
    }  
  }

  getCart(){
    return this.cart;
  }

  getTotal(){
    let total: number = 0;

    for(let product of this.cart) {
      total += product.price;
    }
    return total;
  }

  getService(total: number) {
    let service: number = 0;
    service = total * 0.1;

    return service;
  }

  getDiscount(total: number) {
    let discount: number = 0;
    let service = this.getService(total);
    let totalPlusService = total + service;

    if (totalPlusService >= 40) {
      discount = totalPlusService * 0.15;
    }  
     return discount;
   
    }


    

  getTotalAmount(total: number) {
    let totalAmount: number = 0;
    let service = this.getService(total);
    let discount = this.getDiscount(total);
    
    totalAmount = total + service - discount;
    return totalAmount;

  }

  }

















