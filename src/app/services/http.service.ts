import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../products/products.component';
import {OrderStatus} from '../order/order.component';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  private magazineUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getProducts() {
  }

  getProductById() {
  }

  postAddProduct(product: Product): Observable<OrderStatus> {
    return this.http.post<OrderStatus>(this.magazineUrl + '/magazine/products/add/new', product);
  }

  getAllProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.magazineUrl + '/magazine/products/all');
  }
}
