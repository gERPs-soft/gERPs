import {Component} from '@angular/core';
import {HttpService} from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itema: OrderItem = new OrderItem(1, 2);
  itemb: OrderItem = new OrderItem(2, 4);
  itemList: Array<OrderItem> = [this.itema, this.itemb];
  order: Order = new Order(1, 1, this.itemList);

  constructor(private httpService: HttpService) {
  }

  sendOrder() {
    this.httpService.postOrder(this.order).subscribe(status => console.log(status));
  }
}

export class Order {
  customerId: number;
  sellerId: number;
  OrderItemList: Array<OrderItem>;

  constructor(customerId: number, sellerId: number, OrderItemList: Array<OrderItem>) {
    this.customerId = customerId;
    this.sellerId = sellerId;
    this.OrderItemList = OrderItemList;
  }
}

export class OrderItem {
  private productId: number;
  private quantity: number;


  constructor(productId: number, quantity: number) {
    this.productId = productId;
    this.quantity = quantity;
  }
}

export class OrderStatus {
  private deliveryTime: string;

  constructor(deliveryTime: string) {
    this.deliveryTime = deliveryTime;
  }
}
