import {Component, OnInit} from '@angular/core';
import {CustomerHttpService} from '../services/customer-http.service';
import {Customer} from '../model/customer';


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





