import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';
import { ILineItem } from './catalog/line-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart : IProduct[] = []


  addToCart(product : IProduct)
  {
    this.cart.push(product)
  }

  constructor() { }
}
