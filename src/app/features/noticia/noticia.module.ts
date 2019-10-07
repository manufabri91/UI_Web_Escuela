import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargarNoticiaComponent } from './cargar-noticia/cargar-noticia.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NoticiaRoutingModule } from './noticia-routing.module';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [CargarNoticiaComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NoticiaRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class NoticiaModule { }
