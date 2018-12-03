import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductsHttpService} from '../services/products-http.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;
  message: string;

  constructor(private productsService: ProductsHttpService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      this.productsService.getProductById(param.get('id')).subscribe(value => {
        this.product = value;
      });
    });

  }

  deleteProduct() {
    console.log('Delete product id ' + this.product.id + ' name ' + this.product.name);
    this.productsService.deleteProductById(this.product.id).subscribe(product => {
      this.message = 'You deleted product id=' + this.product.id;
    });
  }
}
