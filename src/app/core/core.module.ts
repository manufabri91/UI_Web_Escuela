import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AlumnoService } from './services/alumno.service';
import { LoginService } from './services/login.service';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, FooterComponent],
  imports: [ // cosas que necesito inyectar en core y son comunes a toda la app
    CommonModule,
    RouterModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatDividerModule,
    MatTabsModule
  ],
  exports: [ // componentes o modulos que se van a usar en otro lado
    NgbModule,
    NavbarComponent,
    FooterComponent,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatDividerModule,
    MatTabsModule
  ],
  providers: [ // servicios a proveer
    AlumnoService,
    LoginService
  ]
})
export class CoreModule { }
