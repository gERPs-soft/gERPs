import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderStatus} from '../model/order-status';
import {Order} from '../model/order';
import {OrderStatusDetails} from '../model/order-status-details';

@Injectable({
  providedIn: 'root'
})
export class OrderHttpService {

  private saveOrderUrl = 'http://localhost:8081/order/save';
  private savedOrdersUrl = 'http://localhost:8081/order/orders';
  private updateOrderStatusUrl = 'http://localhost:8081/order/update_status';
  private orderStatusDetails = new OrderStatusDetails();

  constructor(private http: HttpClient) {
  }

  postOrder(order: Order): Observable<OrderStatus> {
    return this.http.post<OrderStatus>(this.saveOrderUrl, order);
  }

  getAllOrders(): Observable<Array<Order>> {
    return this.http.get<Array<Order>>(this.savedOrdersUrl);
  }

  cancelOrder(orderStatusDetails: OrderStatusDetails): Observable<OrderStatusDetails> {
    return this.http.post<OrderStatusDetails>(this.updateOrderStatusUrl, orderStatusDetails);
  }
}
