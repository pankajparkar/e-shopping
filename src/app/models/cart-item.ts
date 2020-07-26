import { Product } from './product';

export class CartItem implements Product {
  id: number;
  name: string;
  type: string;
  imgUrl: string;
  description: string;
  price: number;
  quantity: number;

  get total() {
    return this.price ? (this.price * this.quantity): 0; 
  }
}
