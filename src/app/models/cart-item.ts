import { Product } from './product';

export class CartItem implements Product {
  id: number;
  name: string;
  type: string;
  imgUrl: string;
  description: string;
  price: number;
  quantity: number;

  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.type = props.type;
    this.imgUrl = props.imgUrl;
    this.description = props.description;
    this.price = props.price;
    this.quantity = props.quantity;
  }

  private get total() {
    return this.price ? (this.price * this.quantity): 0; 
  }
}
