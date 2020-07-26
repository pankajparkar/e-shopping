import {Component, Input} from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: Product;

  constructor() {
  }

  addToCart() {
    // TODO - implement adding of product to cart
  }
}
