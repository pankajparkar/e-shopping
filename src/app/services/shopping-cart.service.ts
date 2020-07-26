import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private cartItems = new BehaviorSubject<CartItem[]>([]);
  private cartItemsCount = new BehaviorSubject<number>(0);

  constructor() { }

  getCartItems() {
    return this.cartItems.asObservable();
  }

  getCartItemsCount() {
    return this.cartItemsCount.asObservable();
  }

  addCartItem(item: CartItem) {
    const collection = this.cartItems.getValue();
    item.quantity = 1;
    collection.push(item);
    this.cartItems.next(collection);
    this.cartItemsCount.next(collection.length);
  }

  removeCartItem(item) {
    let collection = this.cartItems.getValue();
    collection = collection.filter(i => i.id !== item.id);
    this.cartItems.next(collection);
    this.cartItemsCount.next(collection.length);
  }

  setCartItemsCount(count: number) {
    this.cartItemsCount.next(count);
  }

}
