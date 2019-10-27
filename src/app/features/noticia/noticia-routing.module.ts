import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { CargarNoticiaComponent } from './cargar-noticia/cargar-noticia.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { MenuNoticiaComponent } from './menu-noticia/menu-noticia.component';
import { ModificarNoticiaComponent } from './modificar-noticia/modificar-noticia.component';

const routes: Routes = [
  {
    path: 'cargar-noticia',
    component: CargarNoticiaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'modificar-noticia/:id',
    component: ModificarNoticiaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'menu-noticias',
    component: MenuNoticiaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: NovedadesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiaRoutingModule { }
