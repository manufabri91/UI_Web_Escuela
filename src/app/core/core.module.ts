import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AlumnoService } from './services/alumno.service';
import { LoginService } from './services/login.service';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [HomeComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [NavbarComponent, FooterComponent],
  providers: [AlumnoService, LoginService]
})
export class CoreModule { }
