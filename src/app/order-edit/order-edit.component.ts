import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomerHttpService} from '../services/customer-http.service';
import {OrderItem} from '../model/order-item';
import {Product} from '../model/product';
import {Customer} from '../model/customer';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ProductsHttpService} from '../services/products-http.service';
import {Order} from '../model/order';
import {Item} from '../model/item';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  productList = new Array<Product>();
  chosenProducts = new Array<Item>();
  customerList = new Array<Customer>();
  orderItems = new Array<OrderItem>();
  orderForm: FormArray;
  newOrder: Order;
  @Input()
  initOrder: Order;

  @Output()
  eventForm = new EventEmitter<boolean>();


  constructor(private productsService: ProductsHttpService, private customerService: CustomerHttpService) {
  }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe(data => this.productList = data.slice());
    this.customerService.getAllCustomers().subscribe(data => this.customerList = data.slice());
    this.orderForm = new FormArray({
      itemsList: new FormGroup({
        customer: new FormControl(),
        items: new FormControl()
      })

      // mocked sellerId
      /*seller: new FormControl(1)*/
    });
  }

  addItem(product: Product, quantity: number) {
    this.orderItems.push(new OrderItem(product.id, quantity, product.price));
  }

  chooseProduct(product: Product, quantity: number) {
    this.chosenProducts.push(new Item(product, quantity));
  }

  deleteChosen(index) {
    this.chosenProducts.splice(index, 1);
  }

  onSubmit() {


    /*  this.newCustomer.firstName = this.customerForm.value.firstName;
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
    this.customerHttpService.postCustomer(this.newCustomer).subscribe(() => this.eventForm.emit(true));*/
  }

  cancel() {
    this.eventForm.emit(true);
  }
}
