import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AbmAlumnosModule } from './abm-alumnos/abm-alumnos.module';
import { CarrerasModule } from './carreras/carreras.module';
import { AbmAlumnosRoutingModule } from './abm-alumnos/abm-alumnos-routing.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarrerasModule,
    AbmAlumnosModule,
    MatSnackBarModule
  ],
  exports: []
})
export class FeaturesModule { }
