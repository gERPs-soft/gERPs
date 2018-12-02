import {Component, OnInit} from '@angular/core';
import {OrderHttpService} from '../services/order-http.service';
import {OrderItem} from '../model/order-item';
import {Order} from '../model/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Array<Order>;
  showOrderForm: boolean;
  /*itema: OrderItem = new OrderItem(1, 64);
  itemb: OrderItem = new OrderItem(2, 660);
  items: Array<OrderItem> = [this.itema, this.itemb];
  order: Order = new Order(1, 100, 1, this.items);*/

  constructor(private orderHttpService: OrderHttpService) {
  }

  ngOnInit() {
    this.showOrderForm = true;
    this.getOrders();
  }

  sendOrder() {
    this.orderHttpService.postOrder(this.order).subscribe(status => console.log(status));
  }

  getOrders() {
    this.orderHttpService.getAllOrders().subscribe(data => {
      this.orders = data.slice();
    });
  }
}


}



