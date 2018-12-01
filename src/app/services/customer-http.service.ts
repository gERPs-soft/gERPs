import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {CustomerStatus} from '../model/customer-status';


@Injectable({
  providedIn: 'root'
})
export class CustomerHttpService {
  private saveCustomerUrl = 'http://localhost:8081/customer/save';
  private savedCustomersUrl = 'http://localhost:8081/customer/customers';

  constructor(private http: HttpClient) {
  }

  postCustomer(customer: Customer): Observable<CustomerStatus> {
    return this.http.post<CustomerStatus>(this.saveCustomerUrl, customer);
    console.log('Send!!');
  }

  getAllCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(this.savedCustomersUrl);
  }
}
