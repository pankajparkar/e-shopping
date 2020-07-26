import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import {Product} from '../../models/product';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  const dummyProduct: Product = {
    id: 1,
    imgUrl: 'https://dummyimage.com/dummy.jpg',
    type: '',
    description: 'Lorem ipsum',
    name: 'UnitTest',
    price: 99
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = dummyProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('renders product information properly', () => {
    const productElement: HTMLElement = fixture.nativeElement;

    expect(productElement.querySelector('img').src).toEqual(dummyProduct.imgUrl);
    expect(productElement.querySelector('.price').textContent).toEqual(`${dummyProduct.price.toString()}$`);
    expect(productElement.querySelector('h3').textContent).toEqual(dummyProduct.name);
    expect(productElement.querySelector('p').textContent).toEqual(dummyProduct.description);
  });
});
