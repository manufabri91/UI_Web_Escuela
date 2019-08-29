import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerDetailComponent } from './career-detail/career-detail.component';
import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CareerDetailComponent, AltaAlumnoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CareerDetailComponent]
})
export class FeaturesModule { }
