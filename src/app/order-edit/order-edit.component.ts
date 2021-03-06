import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomerHttpService} from '../services/customer-http.service';
import {OrderItem} from '../model/order-item';
import {Product} from '../model/product';
import {Customer} from '../model/customer';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ProductsHttpService} from '../services/products-http.service';
import {Order} from '../model/order';
import {Item} from '../model/item';
import {OrderHttpService} from '../services/order-http.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  productList = new Array<Product>();
  itemsList = new Array<Item>();
  chosenProducts = new Array<Item>();
  customerList = new Array<Customer>();
  orderItemsArray = new Array<OrderItem>();
  orderForm: FormGroup;
  newOrder = new Order();
  customerChoosen = new Customer();
  @Input()
  initOrder: Order;

  @Output()
  eventForm = new EventEmitter<boolean>();


  ngOnInit() {
    this.productsService.getAllProducts().subscribe(data => this.productList = data.slice());
    this.customerService.getAllCustomers().subscribe(data => this.customerList = data.slice());
    this.orderForm = new FormGroup({
      customer: new FormControl(null)
    });
  }

  constructor(private productsService: ProductsHttpService,
              private customerService: CustomerHttpService, private orderService: OrderHttpService) {
  }

  loadItems(arr: Array<Product>) {
    for (const a of arr) {
      this.itemsList.push(new Item(a, 1));
    }
  }

  chooseItem(item: Item) {
    if (item.quantity > 0 && !this.chosenProducts.includes(item)) {
      this.chosenProducts.push(item);
    }
  }

  deleteChosen(index) {
    this.chosenProducts.splice(index, 1);
  }

  decreaseQuantity(item: Item) {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }

  increaseQuantity(item: Item) {
    item.quantity++;
  }

  getOrderItems(items: Array<Item>): Array<OrderItem> {
    for (const item of items) {
      this.orderItemsArray.push(new OrderItem(item.product.id, item.quantity, item.product.price));
    }
    return this.orderItemsArray;
  }

  onSubmit() {
    this.newOrder.customerId = this.orderForm.value.customer;
    console.log(this.orderForm.value.customer);
    this.newOrder.items = this.getOrderItems(this.chosenProducts);
    this.newOrder.sellerId = 1;
    this.orderService.postOrder(this.newOrder).subscribe(() => this.eventForm.emit(true));
  }

  cancel() {
    this.eventForm.emit(true);
  }
}
