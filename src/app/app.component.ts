import {Component, OnInit} from '@angular/core';
import { ShoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cartItems$;
  isShoppingCartVisible = false;

  constructor(
    private shoppingCartService: ShoppingCartService,
  ){

  }

  openShoppingCart() {
    this.isShoppingCartVisible = !this.isShoppingCartVisible;
  }

  ngOnInit() {
    this.cartItems$ = this.shoppingCartService.getCartItems();
  }
}
