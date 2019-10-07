import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargarNoticiaComponent } from './cargar-noticia/cargar-noticia.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NoticiaRoutingModule } from './noticia-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NovedadesComponent } from './novedades/novedades.component';
import { MenuNoticiaComponent } from './menu-noticia/menu-noticia.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [CargarNoticiaComponent, NovedadesComponent, MenuNoticiaComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
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
