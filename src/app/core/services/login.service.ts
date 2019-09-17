import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class LoginService {

  uri = 'https://apisitiou.herokuapp.com/';
  token: string;

  constructor(private http: HttpClient, private router: Router, private jwt: JwtHelperService) { }

  login(username: string, password: string) {
    this.http
      .post<any>(this.uri + 'login', { username, password }, {observe: 'response'})
      .subscribe(
        (res: HttpResponse<any>) => {
                localStorage.setItem('token', res.headers.get('Authorization').replace('Bearer ', ''));
                this.router.navigate(['']);
        }
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  public get isLogeado(): boolean {
    return (localStorage.getItem('token') !== null && this.jwt.isTokenExpired(localStorage.getItem('token')));
  }

}
