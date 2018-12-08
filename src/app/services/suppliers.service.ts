import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Supplier} from '../model/supplier';
import {OrderStatus} from '../model/order-status';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  private supplierUrl = 'http://localhost:8080/magazine/suppliers/';

  constructor(private http: HttpClient) {
  }

  getSupplierById(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(this.supplierUrl + '' + id);
  }
  getAllSuppliers(): Observable<Array<Supplier>> {
    return this.http.get<Array<Supplier>>(this.supplierUrl + 'all');
  }
  postAddOrSaveSupplier(supplier: Supplier): Observable<OrderStatus> {
    return this.http.post<OrderStatus>(this.supplierUrl + 'save', supplier);
  }
  deleteSupplierById(id: number): Observable<Supplier> {
    console.log('DeleteSupplierById=' + id);
    return this.http.delete<Supplier>(this.supplierUrl + id);
  }

}
