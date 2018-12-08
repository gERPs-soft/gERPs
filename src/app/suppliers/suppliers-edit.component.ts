import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Supplier} from '../model/supplier';
import {FormControl, FormGroup} from '@angular/forms';
import {SuppliersService} from '../services/suppliers.service';

@Component({
  selector: 'app-suppliers-edit',
  templateUrl: './suppliers-edit.component.html',
  styleUrls: ['./suppliers-edit.component.css']
})
export class SuppliersEditComponent implements OnInit {

  @Input()
  initSupplier: Supplier;

  supplierForm: FormGroup;
  newSupplier = new Supplier();

  @Output()
  eventForm = new EventEmitter<boolean>();

  constructor(private suppliersService: SuppliersService) {
  }

  ngOnInit() {
    this.supplierForm = new FormGroup({
      name: new FormControl(this.initSupplier.name),
      nip: new FormControl(this.initSupplier.nip),
      city: new FormControl(this.initSupplier.city),
      street: new FormControl(this.initSupplier.street),
      street_number: new FormControl(this.initSupplier.street_number),
      post_code: new FormControl(this.initSupplier.post_code),
      phone_number: new FormControl(this.initSupplier.phone_number),
      email: new FormControl(this.initSupplier.email),
      www: new FormControl(this.initSupplier.www),
      representative_person: new FormControl(this.initSupplier.representative_person),
      bank_supplier_name: new FormControl(this.initSupplier.bank_supplier_name),
      bank_supplier_account_number: new FormControl(this.initSupplier.bank_supplier_account_number),
    })
    ;
  }

  onSubmit() {
    if (this.initSupplier) {
      this.newSupplier.id = this.initSupplier.id;
    } else {
      this.newSupplier.id = null;
    }

    this.newSupplier.name = this.supplierForm.value.name;
    this.newSupplier.nip = this.supplierForm.value.nip;
    this.newSupplier.city = this.supplierForm.value.city;
    this.newSupplier.street = this.supplierForm.value.street;
    this.newSupplier.street_number = this.supplierForm.value.street_number;
    this.newSupplier.post_code = this.supplierForm.value.post_code;
    this.newSupplier.phone_number = this.supplierForm.value.phone_number;
    this.newSupplier.email = this.supplierForm.value.email;
    this.newSupplier.www = this.supplierForm.value.www;
    this.newSupplier.representative_person = this.supplierForm.value.representative_person;
    this.newSupplier.bank_supplier_name = this.supplierForm.value.bank_supplier_name;
    this.newSupplier.bank_supplier_account_number = this.supplierForm.value.bank_supplier_account_number;

    this.suppliersService.postAddOrSaveSupplier(this.newSupplier).subscribe(status => {
      console.log(status);
      this.eventForm.emit(false);
    });
    console.log('Save product:' + this.newSupplier.name);
  }

}
