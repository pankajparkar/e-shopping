import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems$;

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  getTotal(items) {
    return items.reduce((a, b) => a + b.total, 0);
  }

  ngOnInit() {
    this.cartItems$ = this.shoppingCartService.getCartItems();
  }

}
