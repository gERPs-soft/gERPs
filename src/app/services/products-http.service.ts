import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {OrderStatus} from '../order/order.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsHttpService {

  private magazineUrl = 'http://localhost:8080/magazine/products/';

  constructor(private http: HttpClient) {
  }

  deleteProductById(id: number): Observable<Product> {
    console.log('DeleteProductById=' + id);
    return this.http.delete<Product>(this.magazineUrl + id);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.magazineUrl + '' + id);
  }

  postAddOrSaveProduct(product: Product): Observable<OrderStatus> {
    return this.http.post<OrderStatus>(this.magazineUrl + 'save', product);
  }

  getAllProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.magazineUrl + 'all');
  }
}
