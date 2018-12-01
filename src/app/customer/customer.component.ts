import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';
import {Order} from '../order/order.component';
import {CustomerHttpService} from '../services/customer-http.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  static getCustomers(): any {
    throw new Error('Method not implemented.');
  }

  customers: Array<Customer>;

  constructor(private customerHttpService: CustomerHttpService) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerHttpService.getAllCustomers().subscribe(data => {
      this.customers = data.slice();
    });
  }
}

export class Customer {

  id: number;
  firstName: string;
  lastName: string;
  companyName: string;
  address: string;
  nip: string;
  phoneNumber: string;
  email: string;
  customerType: CustomerType;


  constructor() {
  }
}

export enum CustomerType {
  BUSINESS = 'BUSINESS',
  INDIVIDUAL = 'INDIVIDUAL'
}

export class CustomerStatus {
  status: string;
}
