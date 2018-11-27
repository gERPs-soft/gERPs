import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order, OrderStatus} from '../order/order.component';
import {Observable} from 'rxjs';
import {Product} from '../products/products.component';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private saveOrderUrl = 'http://localhost:8081/order/save';
  private saveCustomerUrl = 'http://localhost:8081/order/customer/save';
  private magazineUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getProducts() {
  }

  getProductById() {
  }

  postOrder(order: Order): Observable<OrderStatus> {
    return this.http.post<OrderStatus>(this.saveOrderUrl, order);
  }

  postAddProduct(product: Product): Observable<OrderStatus> {
    return this.http.post<OrderStatus>(this.magazineUrl + '/magazine/products/add/new', product);
  }

  getAllProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.magazineUrl + '/magazine/products/all');
  }
}
