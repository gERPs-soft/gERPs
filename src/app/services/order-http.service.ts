import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderStatus} from '../model/order-status';
import {Order} from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderHttpService {

  private saveOrderUrl = 'http://localhost:8081/order/save';
  private savedOrdersUrl = 'http://localhost:8081/order/orders';

  constructor(private http: HttpClient) {
  }

  postOrder(order: Order): Observable<OrderStatus> {
    return this.http.post<OrderStatus>(this.saveOrderUrl, order);
  }

  getAllOrders(): Observable<Array<Order>> {
    return this.http.get<Array<Order>>(this.savedOrdersUrl);
  }
}
