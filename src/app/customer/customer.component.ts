import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';
import {Order} from '../order/order.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Array<Customer>;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
  }

  getCustomers() {
    this.httpService.getAllCustomers().subscribe(data => {
      this.customers = data.slice();
    });
  }

}

export class Customer {

  private id: number;
  private firstName: string;
  private lastName: string;
  private companyName: string;
  private address: string;
  private nip: string;
  private phoneNumber: string;
  private email: string;
  private customerType: CustomerType;

  constructor() {
  }

}

enum CustomerType {
  BUSINESS, INDIVIDUAL
}

export class CustomerStatus {
  private status: string;
}
