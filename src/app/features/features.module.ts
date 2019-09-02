import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerDetailComponent } from './career-detail/career-detail.component';
import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListarAlumnoComponent } from './listar-alumno/listar-alumno.component';
import { FormAlumnoComponent } from './form-alumno/form-alumno.component';
import { ModificarAlumnoComponent } from './modificar-alumno/modificar-alumno.component';

@NgModule({
  declarations: [CareerDetailComponent, AltaAlumnoComponent, ListarAlumnoComponent, FormAlumnoComponent, ModificarAlumnoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: []
})
export class FeaturesModule { }
