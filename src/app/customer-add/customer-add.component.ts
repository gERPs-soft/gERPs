import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Customer, CustomerComponent, CustomerType} from '../customer/customer.component';
import {CustomerHttpService} from '../services/customer-http.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customerTypes = new Array();
  customerForm: FormGroup;
  newCustomer = new Customer();


  constructor(private customerHttpService: CustomerHttpService) {
  }

  ngOnInit() {
    this.customerForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      companyName: new FormControl(null),
      address: new FormControl(null),
      nip: new FormControl(null),
      phoneNumber: new FormControl(null),
      email: new FormControl(null),
      customerType: new FormControl(CustomerType.BUSINESS.valueOf()),
    });
    this.customerTypes = Object.keys(CustomerType);
  }

  onSubmit() {
    this.newCustomer.id = null;
    this.newCustomer.firstName = this.customerForm.value.firstName;
    this.newCustomer.lastName = this.customerForm.value.lastName;
    this.newCustomer.companyName = this.customerForm.value.companyName;
    this.newCustomer.address = this.customerForm.value.address;
    this.newCustomer.nip = this.customerForm.value.nip;
    this.newCustomer.phoneNumber = this.customerForm.value.phoneNumber;
    this.newCustomer.email = this.customerForm.value.email;
    this.newCustomer.customerType = this.customerForm.value.customerType;
    this.customerHttpService.postCustomer(this.newCustomer).subscribe(status => console.log(status));
    this.customerForm.reset();
  }

}
