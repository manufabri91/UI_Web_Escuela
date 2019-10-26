import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AbmAlumnosModule } from './abm-alumnos/abm-alumnos.module';
import { CarrerasModule } from './carreras/carreras.module';
import { NoticiaModule } from './noticia/noticia.module';
import { AbmDocentesModule } from './abm-docentes/abm-docentes.module';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    CarrerasModule,
    AbmAlumnosModule,
    NoticiaModule,
    MatSnackBarModule,
    AbmDocentesModule
  ],
  exports: []
})
export class FeaturesModule { }
