import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';
import {ProductsHttpService} from '../services/products-http.service';
import {ProductGroup} from '../model/product-group';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {

  productToEdit: Product;
  products: Array<Product>;
  productsGroup: Array<ProductGroup>;

  @Input()
  showProductForm: boolean;

  constructor(private http: HttpClient, private productsService: ProductsHttpService) {
  }

  ngOnInit() {
    this.showProductForm = false;
    this.getProducts();
    this.getGroup();
  }

  hideForm(boolean) {
    this.showProductForm = false;
    this.getProducts();
  }

  getProducts() {
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data.slice();
    });
  }

  getGroup() {
    this.productsService.getAllProductsGroup().subscribe(data => {
      this.productsGroup = data.slice();
    });
  }

  addProductForm() {
    this.showProductForm = true;
    this.productToEdit = new Product();
    this.productToEdit.vat = 'VAT_23';
    this.productToEdit.package_unit = 'Karton';
    this.productToEdit.unitOfMasure = 'szt';
    this.productToEdit.product_group = 1;
  }

  editProduct(product) {
    this.showProductForm = true;
    this.productToEdit = product;
  }
}
