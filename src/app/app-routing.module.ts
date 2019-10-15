import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path: 'noticias',
    loadChildren: './features/noticia/noticia.module#NoticiaModule'
  },
  {
    path: 'login',
    loadChildren: './features/login/login.module#LoginModule'
  },
  {
    path: 'abm-alumnos',
    loadChildren: './features/abm-alumnos/abm-alumnos.module#AbmAlumnosModule'
  },
  {
    path: 'abm-docentes',
    loadChildren: './features/abm-docentes/abm-docentes/abm-docentes.module#AbmDocentesModule'
  },
  {
    path: 'carreras',
    loadChildren: './features/carreras/carreras.module#CarrerasModule'
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
