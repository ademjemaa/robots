import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Output() buy = new EventEmitter()
  @Input() product! : IProduct;

  getImageUrl(product : IProduct)
  {
    if (!product)
      return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

  addToCart() {
    this.buy.emit()
  }
}
