import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AlumnoService } from './services/alumno.service';
import { LoginService } from './services/login.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomeComponent, NavbarComponent],
  imports: [ // cosas que necesito inyectar en core y son comunes a toda la app
    CommonModule,
    RouterModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  exports: [ // componentes o modulos que se van a usar en otro lado
    NgbModule,
    NavbarComponent,
    MatButtonModule
  ],
  providers: [ // servicios a proveer
    AlumnoService,
    LoginService
  ]
})
export class CoreModule { }
