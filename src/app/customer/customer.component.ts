import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

export class Customer {

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
