import {Component, Input, OnInit} from '@angular/core';
import {SuppliersService} from '../services/suppliers.service';
import {Supplier} from '../model/supplier';
import {Product} from '../model/product';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  @Input()
  showSuppliersForm: boolean;

  @Input()
  showDeleteMessage: boolean;

  supplierToEdit: Supplier;
  suppliers: Array<Supplier>;
  sortedColumn = 'name';
  howSort: boolean = true;

  constructor(private supplierService: SuppliersService) {
  }

  ngOnInit() {
    this.showSuppliersForm = false;
    this.getSuppliers();
  }

  sortThisColum(columnName: string, how: boolean) {
    this.sortedColumn = columnName;
    this.howSort = !how;
  }

  hideForm(event: boolean) {
    this.showSuppliersForm = event;
    this.getSuppliers();
  }

  hideDel(event: boolean) {
    this.showDeleteMessage = event;
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
