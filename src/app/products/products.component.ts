import {Component, OnInit, OnDestroy} from '@angular/core';
import {Product} from '../models/product';
import {ProductService} from '../services/product.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Subscription } from 'rxjs';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subscriptions: Subscription[] = [];
  cardItems: CartItem[];

  constructor(
    private productsService: ProductService,
    private shoppingCartService: ShoppingCartService,
  ) {
  }

  getCartItems() {
    const cartItemsSubscription = this.shoppingCartService.getCartItems().subscribe(
      items => this.cardItems = items
    );
    this.subscriptions.push(cartItemsSubscription);
  }

  itemExist(id: number) {
    return !!(this.cardItems.length && this.cardItems.find(c => c.id === id));
  }

  getProducts() {
    const subscription = this.productsService.getProducts().subscribe(
      products => this.products = products
    );
    this.subscriptions.push(subscription);
  }

  ngOnInit() {
    this.getProducts();
    this.getCartItems();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
