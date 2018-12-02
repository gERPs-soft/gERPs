import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderStatus} from '../order/order.component';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  private magazineUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  postAddOrSaveProduct(product: Product): Observable<OrderStatus> {
    return this.http.post<OrderStatus>(this.magazineUrl + '/magazine/products/save', product);
  }

  getAllProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.magazineUrl + '/magazine/products/all');
  }
}
