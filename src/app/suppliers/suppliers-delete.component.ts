import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Supplier} from '../model/supplier';
import {SuppliersService} from '../services/suppliers.service';
import {ProductsHttpService} from '../services/products-http.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-suppliers-delete',
  templateUrl: './suppliers-delete.component.html',
  styleUrls: ['./suppliers-delete.component.css']
})
export class SuppliersDeleteComponent implements OnInit {

  supplier: Supplier;
  message: string;

  constructor(private suppliersService: SuppliersService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      this.suppliersService.getSupplierById(param.get('id')).subscribe(value => {
        this.supplier = value;
      });
    });
  }
  deleteSupplier() {
    console.log('Delete supplier ' + this.supplier.name);
    this.suppliersService.deleteSupplierById(this.supplier.id).subscribe(supp => {
      this.message = 'You deleted product ' + this.supplier.name;
    });
    /*this.eventForm.emit(false);*/
  }
}
