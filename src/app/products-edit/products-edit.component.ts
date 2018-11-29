import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../products/products.component';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  contactForm: FormGroup;

  unitOfMass = ['szt', 'litr', 'tona', 'opakowanie', 'bańka'];
  package_units = ['Karton', 'Folia', 'Baniak', 'Paleta', 'Box'];
  vats = ['VAT_23', 'VAT_8', 'VAT_0'];

  ngOnInit() {
    this.contactForm = new FormGroup({
      id: new FormControl(null),
      assort_index: new FormControl(null),
      name: new FormControl(),
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
  }

}

class ProductForm {
  constructor(
   public id: number,
   public assort_index: string,
   public name: string,
   public product_group: number,
   public unitOfMasure: string,
   public barcode: string,
  public weight_unit: number,
  public package_unit: string,
  public number_in_package: number,
  public height: number,
  public weight: number,
  public length: number,
  public supplier: number,
  public stock: number,
  public  price: number,
  public vat: string
) {}
}
