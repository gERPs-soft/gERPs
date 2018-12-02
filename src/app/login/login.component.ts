import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../model/user';
import {UserHttpService} from '../services/user-http.service';
import {LoginStatus} from '../model/login-status';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user = new User();
  loginStatus: LoginStatus;

  constructor(private userHttpService: UserHttpService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl(null),
      password: new FormControl(null)
    });
  }

  onSubmit() {
    this.user.login = this.loginForm.value.login;
    this.user.password = this.loginForm.value.password;
    this.userHttpService.postUserLogin(this.user).subscribe(status => this.loginStatus = status);
  }

}
