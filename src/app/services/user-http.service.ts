import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {LoginStatus} from '../model/login-status';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  private loginUrl = 'http://localhost:8082/login/';
  private logoutUrl = 'http://localhost:8082/logout/';

  constructor(private http: HttpClient) {
  }

  postUserLogin(user: User): Observable<LoginStatus> {
    return this.http.post<LoginStatus>(this.loginUrl, user);
  }
  postUserLogout(user: User): Observable<LoginStatus> {
    return this.http.post<LoginStatus>(this.logoutUrl, user);
  }
}
