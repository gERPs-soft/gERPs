import {Component} from '@angular/core';
import {HttpService} from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  twoWayBinding = '';

  constructor(private httpService: HttpService) {
  }

  toFocus() {
    this.twoWayBinding = 'Siema tu focus';
  }
}
