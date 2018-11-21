import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order, OrderStatus} from '../app.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private serverUrl = 'http://localhost:8081/order/save';

  constructor(private http: HttpClient) {
  }

  getProducts() {
  }

  getProductById() {
  }

  postOrder(order: Order): Observable<OrderStatus> {
    return this.http.post<OrderStatus>(this.serverUrl, order);
  }
}
