import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDocenteComponent } from './menu-docente/menu-docente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AbmDocenteRoutingModule } from './abm-docentes-routing.module';
import { AltaDocenteComponent } from './alta-docente/alta-docente.component';
import { FormDocenteComponent } from './form-docente/form-docente.component';
import { ModificarDocenteComponent } from './modificar-docente/modificar-docente.component';



@NgModule({
  declarations: [ MenuDocenteComponent, AltaDocenteComponent, FormDocenteComponent, ModificarDocenteComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    AbmDocenteRoutingModule
  ]
})
export class AbmDocentesModule { }
