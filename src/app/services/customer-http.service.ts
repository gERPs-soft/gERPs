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
  private deleteCustomerUrl = 'http://localhost:8081/customer/delete';
  private savedCustomersUrl = 'http://localhost:8081/customer/customers';
  urlDelete: string;

  constructor(private http: HttpClient) {
  }

  postCustomer(customer: Customer): Observable<CustomerStatus> {
    return this.http.post<CustomerStatus>(this.saveCustomerUrl, customer);
    console.log('Send!!');
  }

  getAllCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(this.savedCustomersUrl);
  }

  deleteCustomer(customer: Customer): Observable<CustomerStatus> {
    /*console.log('Delete customer idToDelete: ' + customer.id);
    this.urlDelete = this.deleteCustomerUrl + '/' + customer.id;
    console.log(this.urlDelete);
    return this.http.post<CustomerStatus>(this.urlDelete, customer);*/
    this.urlDelete = this.deleteCustomerUrl + '/' + customer.id;
    return this.http.delete<CustomerStatus>(this.urlDelete);
  }
}
