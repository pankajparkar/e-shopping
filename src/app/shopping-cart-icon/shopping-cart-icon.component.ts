import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'shopping-cart-icon',
  templateUrl: './shopping-cart-icon.component.html',
  styleUrls: ['./shopping-cart-icon.component.css']
})
export class ShoppingCartIconComponent implements OnInit {
  @Input() items: CartItem[] = [];

  constructor() { }

  ngOnInit() {
  }

}
