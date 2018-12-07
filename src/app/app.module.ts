import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpService} from './services/http.service';
import {HttpClientModule} from '@angular/common/http';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { TransformPricePipe } from './shared/transform-price.pipe';
import { SortIndexPipe } from './shared/sort-index.pipe';
import { OrderComponent } from './order/order.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';
import {LoginComponent} from './login/login.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ProductsComponent} from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsEditComponent,
    ProductDeleteComponent,
    ProductsComponent,
    TransformPricePipe,
    SortIndexPipe,
    OrderComponent,
    CustomerComponent,
    OrderEditComponent,
    CustomerAddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [HttpService, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
