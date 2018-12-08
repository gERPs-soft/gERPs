import {Component, Input, OnInit} from '@angular/core';
import {Supplier} from '../model/supplier';

@Component({
  selector: 'app-suppliers-edit',
  templateUrl: './suppliers-edit.component.html',
  styleUrls: ['./suppliers-edit.component.css']
})
export class SuppliersEditComponent implements OnInit {

  @Input()
  initSupplier: Supplier;

  constructor() { }

  ngOnInit() {
  }

}
