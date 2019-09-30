import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargarNoticiaComponent } from './cargar-noticia/cargar-noticia.component';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [CargarNoticiaComponent],
  imports: [
    CommonModule,
    MatFormFieldModule
  ]
})
export class NoticiaModule { }
