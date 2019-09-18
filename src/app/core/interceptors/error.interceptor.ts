import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private loginService: LoginService, private router: Router, private snackBar: MatSnackBar) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 403) {
                if (err.url !== 'https://apisitiou.herokuapp.com/login') {
                    this.loginService.logout();
                    this.router.navigate(['/login']);
                } else {
                    this.snackBar.open('Usuario o contraseña inválido', 'OK', {
                        duration: 2000,
                    });
                }
            }

            const error = err.message || err.statusText;
            return throwError(error);
        }));
    }
}
