import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderStatus} from '../order/order.component';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private magazineUrl = 'http://localhost:8080';

  constructor() {
  }
}
