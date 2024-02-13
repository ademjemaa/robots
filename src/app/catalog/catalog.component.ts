import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  filter: string = '';
  products! : IProduct[];
  cart : IProduct[] = [];

  constructor(
    private cartSvc : CartService,
    private productSvc : ProductService,
    ) {}

    ngOnInit()
    {
      this.productSvc.getProducts().subscribe((products) => 
      {
        this.products = products;
      })
    }

  getImageUrl(product : IProduct)
  {
    if (!product)
      return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

  addToCart(product : IProduct)
  {
    this.cartSvc.addToCart(product);
  }

  getFilteredProducts()
  {
    return this.filter === '' 
    ? this.products 
    : this.products.filter((product: any) => product.category === this.filter);
  }
}
