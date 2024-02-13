import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';
import { ILineItem } from './catalog/line-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart : ILineItem[] = []


  getTotalPrice()
  {

  }

  addToCart(product : IProduct)
  {
    
    console.log(` product ${product.name} added to cart`)
    console.log(` Total price : ${this.getTotalPrice()} `)
  }

  constructor() { }
}
