import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  itema: OrderItem = new OrderItem(1, 2, 3.54);
  itemb: OrderItem = new OrderItem(2, 4, 4.15);
  items: Array<OrderItem> = [this.itema, this.itemb];
  order: Order = new Order(1, 1, 1, this.items, '');

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
  }

  sendOrder() {
    this.httpService.postOrder(this.order).subscribe(status => console.log(status));
  }
}

export class Order {
  orderId: number;
  customerId: number;
  sellerId: number;
  items: Array<OrderItem>;
  sendDate: string;


  constructor(orderId: number, customerId: number, sellerId: number, items: Array<OrderItem>, sendDate: string) {
    this.orderId = orderId;
    this.customerId = customerId;
    this.sellerId = sellerId;
    this.items = items;
    this.sendDate = sendDate;
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
