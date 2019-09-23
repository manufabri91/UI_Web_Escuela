import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModificarAlumnoComponent } from './modificar-alumno/modificar-alumno.component';
import { FormAlumnoComponent } from './form-alumno/form-alumno.component';
import { MenuAlumnoComponent } from './menu-alumno/menu-alumno.component';
import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';
import { AbmAlumnosRoutingModule } from './abm-alumnos-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ AltaAlumnoComponent, MenuAlumnoComponent, FormAlumnoComponent, ModificarAlumnoComponent ],
  imports: [
    CommonModule,
    AbmAlumnosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AbmAlumnosModule { }
