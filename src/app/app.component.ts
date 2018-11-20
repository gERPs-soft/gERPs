import {Component} from '@angular/core';
import {HttpService} from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itema: OrderItem = new OrderItem(1, 2, 3.54);
  itemb: OrderItem = new OrderItem(2, 4, 4.15);
  items: Array<OrderItem> = [this.itema, this.itemb];
  order: Order = new Order(1, 1, this.items);

  constructor(private httpService: HttpService) {
  }

  sendOrder() {
    this.httpService.postOrder(this.order).subscribe(status => console.log(status));
  }
}

export class Order {
  customerId: number;
  sellerId: number;
  items: Array<OrderItem>;

  constructor(customerId: number, sellerId: number, OrderItemList: Array<OrderItem>) {
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
