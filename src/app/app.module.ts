import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderBarComponent} from './header-bar/header-bar.component';
import {ProductsComponent} from './products/products.component';
import {ProductService} from './services/product.service';
import {ProductComponent} from './products/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartIconComponent } from './shopping-cart-icon/shopping-cart-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    ProductsComponent,
    ProductComponent,
    ShoppingCartComponent,
    ShoppingCartIconComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
