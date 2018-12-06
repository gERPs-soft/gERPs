import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerHttpService} from '../services/customer-http.service';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customerTypes = new Array();
  customerForm: FormGroup;
  newCustomer = new Customer();
  @Input()
  initCustomer: Customer;
  @Output()
  eventForm = new EventEmitter<boolean>();

  constructor(private customerHttpService: CustomerHttpService) {
  }

  ngOnInit() {
    this.customerForm = new FormGroup({
      firstName: new FormControl(this.initCustomer.firstName),
      lastName: new FormControl(this.initCustomer.lastName),
      companyName: new FormControl(this.initCustomer.companyName),
      address: new FormControl(this.initCustomer.address),
      nip: new FormControl(this.initCustomer.nip),
      phoneNumber: new FormControl(this.initCustomer.phoneNumber),
      email: new FormControl(this.initCustomer.email),
      customerType: new FormControl(this.initCustomer.customerType),
    });
    this.customerTypes = Object.keys(CustomerType);
  }

  onSubmit() {
    this.newCustomer.firstName = this.customerForm.value.firstName;
    this.newCustomer.lastName = this.customerForm.value.lastName;
    this.newCustomer.companyName = this.customerForm.value.companyName;
    this.newCustomer.address = this.customerForm.value.address;
    this.newCustomer.nip = this.customerForm.value.nip;
    this.newCustomer.phoneNumber = this.customerForm.value.phoneNumber;
    this.newCustomer.email = this.customerForm.value.email;
    this.newCustomer.customerType = this.customerForm.value.customerType;
    if (this.initCustomer) {
      this.newCustomer.id = this.initCustomer.id;
    } else {
      this.newCustomer.id = null;
    }
    this.customerHttpService.postCustomer(this.newCustomer).subscribe(() => this.eventForm.emit(true));
  }

  cancel() {
    this.eventForm.emit(true);
  }
}
