import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';
import {ProductsHttpService} from '../services/products-http.service';
import {ProductGroup} from '../model/product-group';
import {SuppliersService} from '../services/suppliers.service';
import {Supplier} from '../model/supplier';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {

  productToEdit: Product;
  products: Array<Product>;
  productsGroup: Array<ProductGroup>;
  suppliers: Array<Supplier>;
  sortedColumn = 'assort_index';
  howSort: boolean = true;

  @Input()
  showProductForm: boolean;

  constructor(private http: HttpClient, private productsService: ProductsHttpService, private suppliersService: SuppliersService) {
  }

  ngOnInit() {
    this.showProductForm = false;
    this.suppliersService.getAllSuppliers().subscribe(data => {
      this.suppliers = data;
    });
    this.getGroup();
    this.getProducts();
  }

  hideForm(hide: boolean) {
    this.showProductForm = hide;
    this.getProducts();
  }

  sortThisColum(columnName: string, how: boolean) {
    this.sortedColumn = columnName;
    this.howSort = !how;
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
