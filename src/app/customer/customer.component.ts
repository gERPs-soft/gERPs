import {Component, Input, OnInit} from '@angular/core';
import {CustomerHttpService} from '../services/customer-http.service';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerToEdit: Customer;
  customers: Array<Customer>;
  @Input()
  showCustomerForm: boolean;

  sortedColumn = 'companyName';
  howSort: boolean = true;

  constructor(private customerHttpService: CustomerHttpService) {
  }

  ngOnInit() {
    this.showCustomerForm = false;
    this.getCustomers();
  }

  getCustomers() {
    this.customerHttpService.getAllCustomers().subscribe(data => {
      this.customers = data.slice();
    });
  }

  sortThisColum(columnName: string, how: boolean) {
    this.sortedColumn = columnName;
    this.howSort = !how;
  }

  addCustomerForm() {
    this.showCustomerForm = true;
    this.customerToEdit = new Customer();
    this.customerToEdit.customerType = CustomerType.BUSINESS;
  }

  hideForm(task: boolean) {
    this.getCustomers();
    this.showCustomerForm = false;
  }

  deleteCustomer(customer: Customer) {
    this.customerHttpService.deleteCustomer(customer).subscribe(() => this.getCustomers());
  }

  editCustomer(customer) {
    this.showCustomerForm = true;
    this.customerToEdit = customer;
  }
}





