import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order, OrderStatus} from '../app.component';
import {Observable} from 'rxjs';
import {Product} from '../products/products.component';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // private serverUrl = 'http://localhost:8081/order/save';
  private serverUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getProducts() {
  }

  getProductById() {
  }

  postOrder(order: Order): Observable<OrderStatus> {
    return this.http.post<OrderStatus>(this.serverUrl + '/magazine/orders/add-order', order);
  }
  postAddProduct(product: Product): Observable<OrderStatus> {
    return this.http.post<OrderStatus>(this.serverUrl + '/magazine/products/add/new', product);
  }

  getAllProducts(): Observable<Array<Product>> {
    return this.http.get(this.serverUrl + '/magazine/products/all');
  }
}
