import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() cartItem: CartItem;

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
  }

  updateCart(item) {
    this.shoppingCartService.removeCartItem(item);
  }
}
