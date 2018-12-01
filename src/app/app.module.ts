import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpService} from './services/http.service';
import {HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { TransformPricePipe } from './shared/transform-price.pipe';
import { SortIndexPipe } from './shared/sort-index.pipe';
import { OrderComponent } from './order/order.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductsEditComponent,
    TransformPricePipe,
    SortIndexPipe,
    OrderComponent,
    CustomerComponent,
    OrderListComponent,
    OrderEditComponent,
    CustomerEditComponent,
    CustomerListComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpService, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
