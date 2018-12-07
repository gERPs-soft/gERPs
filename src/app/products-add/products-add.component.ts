import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';
import {Product} from '../model/product';
import {ProductsHttpService} from '../services/products-http.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {

  /*product: Product = new Product(null,
    '1.07.003', 'Papier STANDARD 19 1w szary', 1, 'szt', '1111004411',
    4, 'Folia', 12, 20, 40, 60, 2, 1400, 1.00, 'VAT_23');
*/
  constructor(private productsService: ProductsHttpService) {
  }

  ngOnInit() {
  }
/*
  public addProduct() {
    this.productsService.postAddOrSaveProduct(this.product).subscribe(status => console.log(status));
  }*/
}
