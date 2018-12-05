
export class OrderItem {
  productId: number;
  quantity: number;
  productPrice: number;

  constructor(productId: number, quantity: number, productPrice: number) {
    this.productId = productId;
    this.quantity = quantity;
    this.productPrice = productPrice;
  }
}
