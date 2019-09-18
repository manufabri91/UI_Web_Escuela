import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerDetailComponent } from './career-detail/career-detail.component';
import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuAlumnoComponent } from './menu-alumno/menu-alumno.component';
import { FormAlumnoComponent } from './form-alumno/form-alumno.component';
import { ModificarAlumnoComponent } from './modificar-alumno/modificar-alumno.component';
import { MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [CareerDetailComponent, AltaAlumnoComponent, MenuAlumnoComponent, FormAlumnoComponent, ModificarAlumnoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: []
})
export class FeaturesModule { }
