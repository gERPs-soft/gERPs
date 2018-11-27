import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../products/products.component';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {

  products: Array<Product>;

  constructor(private http: HttpClient, private httpService: HttpService) {
  }

  getProducts() {
    this.httpService.getAllProducts().subscribe(data => {
      this.products = data.slice();
    });
  }

  ngOnInit() {
    this.httpService.getAllProducts().subscribe(data => {
      this.products = data.slice();
    });
  }


}
