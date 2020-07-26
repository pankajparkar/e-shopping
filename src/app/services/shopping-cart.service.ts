import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cartItems = new BehaviorSubject<CartItem[]>([]);

  constructor() { }

  getCartItems() {
    return this.cartItems.asObservable();
  }

  addCartItem(item) {
    this.cartItems.next(item);
  }

}
