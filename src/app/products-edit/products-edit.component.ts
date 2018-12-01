import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpService} from '../services/http.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  contactForm: FormGroup;
  product: Product;

  unitOfMass = ['szt', 'litr', 'tona', 'opakowanie', 'bańka'];
  package_units = ['Karton', 'Folia', 'Baniak', 'Paleta', 'Box'];
  vats = ['VAT_23', 'VAT_8', 'VAT_0'];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.contactForm = new FormGroup({
      id: new FormControl(null),
      assort_index: new FormControl(null),
      name: new FormControl(null),
      product_group: new FormControl(null),
      unitOfMasure: new FormControl(this.unitOfMass[0]),
      barcode: new FormControl(null),
      weight_unit: new FormControl(null),
      package_unit: new FormControl(this.package_units[0]),
      number_in_package: new FormControl(null),
      height: new FormControl(null),
      weight: new FormControl(null),
      length: new FormControl(null),
      supplier: new FormControl(null),
      stock: new FormControl(null),
      price: new FormControl(null),
      vat: new FormControl(this.vats[0])
    });
  }

  onSubmit() {
    console.log(this.contactForm);
    this.product = new Product(null, this.contactForm.value.assort_index, this.contactForm.value.name, this.contactForm.value.product_group,
      this.contactForm.value.unitOfMasure, this.contactForm.value.barcode, this.contactForm.value.weight_unit,
      this.contactForm.value.package_unit,
      this.contactForm.value.number_in_package, this.contactForm.value.height, this.contactForm.value.weight, this.contactForm.value.length,
      this.contactForm.value.supplier, this.contactForm.value.stock, this.contactForm.value.price, this.contactForm.value.vat);

    this.httpService.postAddProduct(this.product).subscribe(status => console.log(status));
    console.log(this.product);
  }

}

