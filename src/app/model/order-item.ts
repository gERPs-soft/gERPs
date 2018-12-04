import {Product} from './product';

export class OrderItem {
  product: Product;
  quantity: number;
  productPrice: number;


  constructor(product: Product, quantity: number, productPrice: number) {
    this.product = product;
    this.quantity = quantity;
    this.productPrice = productPrice;
  }
}
