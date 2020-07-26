import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isShoppingCartVisible = false;

  openShoppingCart() {
    this.isShoppingCartVisible = !this.isShoppingCartVisible;
  }
}
