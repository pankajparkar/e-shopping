import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HeaderBarComponent} from './header-bar/header-bar.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ShoppingCartIconComponent} from './shopping-cart-icon/shopping-cart-icon.component';
import {ProductComponent} from './products/product/product.component';
import {ProductsComponent} from './products/products.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderBarComponent,
        ShoppingCartComponent,
        ShoppingCartIconComponent,
        ProductComponent,
        ProductsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
