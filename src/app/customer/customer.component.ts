import {Component, Input, OnInit} from '@angular/core';
import {CustomerHttpService} from '../services/customer-http.service';
import {Customer} from '../model/customer';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Array<Customer>;
  @Input()
  showCustomerForm: boolean;

  constructor(private customerHttpService: CustomerHttpService) {
  }

  ngOnInit() {
    this.showCustomerForm = true;
    this.getCustomers();
  }

  getCustomers() {
    this.customerHttpService.getAllCustomers().subscribe(data => {
      this.customers = data.slice();
    });
  }

  addCustomerForm() {
    this.showCustomerForm = false;
  }

  hideForm(task: boolean) {
    this.ngOnInit();
  }

  deleteCustomer(customer: Customer) {
    this.customerHttpService.deleteCustomer(customer);
    this.getCustomers();
  }
}





