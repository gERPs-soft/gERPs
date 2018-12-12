import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../model/product';
import {ProductsHttpService} from '../services/products-http.service';
import {ProductGroup} from '../model/product-group';
import {Supplier} from '../model/supplier';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  productForm: FormGroup;
  newProduct = new Product();

  @Output()
  eventForm = new EventEmitter<boolean>();

  @Input()
  initProduct: Product;
  @Input()
  products_group: Array<ProductGroup>;
  @Input()
  suppliers: Array<Supplier>;

  unitOfMass = ['szt', 'litr', 'tona', 'opakowanie', 'bańka'];
  package_units = ['Karton', 'Folia', 'Baniak', 'Paleta', 'Box'];
  vats = ['VAT_23', 'VAT_8', 'VAT_0'];

  constructor(private productsService: ProductsHttpService) {
  }

  ngOnInit() {
    this.productForm = new FormGroup({
      assort_index: new FormControl(this.initProduct.assort_index),
      name: new FormControl(this.initProduct.name),
      product_group: new FormControl(this.initProduct.product_group),
      unitOfMasure: new FormControl(this.initProduct.unitOfMasure),
      barcode: new FormControl(this.initProduct.barcode),
      weight_unit: new FormControl(this.initProduct.weight_unit),
      package_unit: new FormControl(this.initProduct.package_unit),
      number_in_package: new FormControl(this.initProduct.number_in_package),
      height: new FormControl(this.initProduct.height),
      weight: new FormControl(this.initProduct.weight),
      length: new FormControl(this.initProduct.length),
      supplier: new FormControl(this.initProduct.supplier),
      stock: new FormControl(this.initProduct.stock),
      price: new FormControl(this.initProduct.price),
      vat: new FormControl(this.initProduct.vat)
    });
  }

  onSubmit() {
    if (this.initProduct) {
      this.newProduct.id = this.initProduct.id;
    } else {
      this.newProduct.id = null;
    }
    this.newProduct.assort_index = this.productForm.value.assort_index;
    this.newProduct.name = this.productForm.value.name;
    this.newProduct.product_group = this.productForm.value.product_group;
    this.newProduct.unitOfMasure = this.productForm.value.unitOfMasure;
    this.newProduct.barcode = this.productForm.value.barcode;
    this.newProduct.weight_unit = this.productForm.value.weight_unit;
    this.newProduct.package_unit = this.productForm.value.package_unit;
    this.newProduct.number_in_package = this.productForm.value.number_in_package;
    this.newProduct.height = this.productForm.value.height;
    this.newProduct.weight = this.productForm.value.weight;
    this.newProduct.length = this.productForm.value.length;
    this.newProduct.supplier = this.productForm.value.supplier;
    this.newProduct.stock = this.productForm.value.stock;
    this.newProduct.price = this.productForm.value.price;
    this.newProduct.vat = this.productForm.value.vat;

    this.productsService.postAddOrSaveProduct(this.newProduct).subscribe(status => {
      console.log(status);
      this.eventForm.emit(false);
    });
    console.log('Save product:' + this.newProduct.name);
  }

}

