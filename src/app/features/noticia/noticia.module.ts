import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargarNoticiaComponent } from './cargar-noticia/cargar-noticia.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NoticiaRoutingModule } from './noticia-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NovedadesComponent } from './novedades/novedades.component';
import { MenuNoticiaComponent } from './menu-noticia/menu-noticia.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormNoticiaComponent } from './form-noticia/form-noticia.component';
import { ModificarNoticiaComponent } from './modificar-noticia/modificar-noticia.component';



@NgModule({
  declarations: [CargarNoticiaComponent, NovedadesComponent, MenuNoticiaComponent, FormNoticiaComponent, ModificarNoticiaComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NoticiaRoutingModule,
    MatIconModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class NoticiaModule { }
