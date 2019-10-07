import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { CargarNoticiaComponent } from './cargar-noticia/cargar-noticia.component';

const routes: Routes = [
  {
    path: 'cargar-noticia',
    component: CargarNoticiaComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: '',
  //   component: CargarNoticiaComponent // cambiar por lista de noticias
  // },
  // // {
  // //   path: '**',
  // //   redirectTo: ''
  // // }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiaRoutingModule { }
