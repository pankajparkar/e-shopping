import {Component, Input} from '@angular/core';
import {Product} from '../../models/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: Product;
  @Input() addedToCart: boolean = false;

  constructor(
    private shoppingCartService: ShoppingCartService,
  ) {
  }

  addToCart(product: Product) {
    const cartItem: CartItem = new CartItem(product);
    this.shoppingCartService.addCartItem(cartItem);
  }
}
