import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';
import {ProductsHttpService} from '../services/products-http.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {

  products: Array<Product>;

  constructor(private http: HttpClient, private productsService: ProductsHttpService) {
  }

  getProducts() {
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data.slice();
    });
  }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data.slice();
    });
  }
}
