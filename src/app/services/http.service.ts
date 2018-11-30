import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order, OrderStatus} from '../order/order.component';
import {Observable} from 'rxjs';
import {Product} from '../products/products.component';
import {Customer, CustomerStatus} from '../customer/customer.component';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private saveOrderUrl = 'http://localhost:8081/order/save';
  private savedOrdersUrl = 'http://localhost:8081/order/orders';
  private saveCustomerUrl = 'http://localhost:8081/customer/save';
  private savedCustomersUrl = 'http://localhost:8081/customer/customers';
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

  getAllOrders(): Observable<Array<Order>> {
    return this.http.get<Array<Order>>(this.savedOrdersUrl);
  }

  postCustomer(customer: Customer): Observable<CustomerStatus> {
    return this.http.post<CustomerStatus>(this.saveCustomerUrl, customer);
  }

  getAllCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(this.savedCustomersUrl);
  }

  postAddProduct(product: Product): Observable<OrderStatus> {
    return this.http.post<OrderStatus>(this.magazineUrl + '/magazine/products/add/new', product);
  }

  getAllProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.magazineUrl + '/magazine/products/all');
  }
}
