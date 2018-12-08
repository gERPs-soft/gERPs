import {Component, Input, OnInit} from '@angular/core';
import {SuppliersService} from '../services/suppliers.service';
import {Supplier} from '../model/supplier';
import {Product} from '../model/product';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  @Input()
  showSuppliersForm: boolean;

  supplierToEdit: Supplier;
  suppliers: Array<Supplier>;

  constructor(private supplierService: SuppliersService) {
  }

  ngOnInit() {
    this.showSuppliersForm = false;
    this.getSuppliers();
  }

  hideForm(event: boolean) {
    this.showSuppliersForm = event;
    this.getSuppliers();
  }

  getSuppliers() {
    this.supplierService.getAllSuppliers().subscribe(data => {
      this.suppliers = data.slice();
    });
  }

  addSupplierForm() {
    this.showSuppliersForm = true;
    this.supplierToEdit = new Supplier();
  }

  editSupplier(supplier) {
    this.showSuppliersForm = true;
    this.supplierToEdit = supplier;
  }

}
