import {Component, OnInit} from '@angular/core';
import {OrderHttpService} from '../services/order-http.service';
import {HttpService} from '../services/http.service';
import {CustomerHttpService} from '../services/customer-http.service';
import {OrderItem} from '../model/order-item';
import {Product} from '../model/product';
import {Customer} from '../model/customer';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerType} from '../model/customer-type';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  productList = new Array<Product>();
  customerList = new Array<Customer>();
  orderItems = new Array<OrderItem>();
  orderForm: FormGroup;

  constructor(private httpService: HttpService, private customerService: CustomerHttpService) {
  }

  ngOnInit() {
    this.httpService.getAllProducts().subscribe(data => this.productList = data.slice());
    this.customerService.getAllCustomers().subscribe(data => this.customerList = data.slice());
    this.orderForm = new FormGroup({
      customer: new FormControl(null)
    });
  }

  addItem(product: Product, quantity: number) {
    this.orderItems.push(new OrderItem(product, quantity));
  }

  onSubmit() {
    /*this.newCustomer.id = null;
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
    this.eventForm.emit(true);*/
  }
}
