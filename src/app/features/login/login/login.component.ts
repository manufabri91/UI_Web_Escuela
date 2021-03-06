import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ocultar = true;
  email = '';
  password = '';

  constructor(private loginService: LoginService) {

  }
  Login() {
    this.loginService.login(this.email, this.password);
  }

  ngOnInit() { }
}
