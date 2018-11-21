import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order, OrderStatus} from '../order/order.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private saveOrderUrl = 'http://localhost:8081/order/save';
  private saveCustomerUrl = 'http://localhost:8081/order/customer/save';

  constructor(private http: HttpClient) {
  }

  getProducts() {
  }

  getProductById() {
  }

  postOrder(order: Order): Observable<OrderStatus> {
    return this.http.post<OrderStatus>(this.saveOrderUrl, order);
  }
}
