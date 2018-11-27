import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private httpService: HttpService) {
  itema: OrderItem = new OrderItem(1, 2, 3.54);
  itemb: OrderItem = new OrderItem(2, 4, 4.15);
  items: Array<OrderItem> = [this.itema, this.itemb];
  order: Order = new Order(1, 1, 1, this.items);

  sendOrder() {
    this.httpService.postOrder2(this.order).subscribe(status => console.log(status));
  }
}

export class Order {
  orderId: number;
  customerId: number;
  sellerId: number;
  items: Array<OrderItem>;

  constructor(orderId: number, customerId: number, sellerId: number, OrderItemList: Array<OrderItem>) {
    this.orderId = orderId;
    this.customerId = customerId;
    this.sellerId = sellerId;
    this.items = OrderItemList;
  }
}

export class OrderItem {
  private productId: number;
  private quantity: number;
  private productPrice: number;


  constructor(productId: number, quantity: number, productPrice: number) {
    this.productId = productId;
    this.quantity = quantity;
    this.productPrice = productPrice;
  }
}

export class OrderStatus {
  private deliveryTime: string;

  constructor(deliveryTime: string) {
    this.deliveryTime = deliveryTime;

  }
}
