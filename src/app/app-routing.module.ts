import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { CareerDetailComponent } from './features/career-detail/career-detail.component';
import { AltaAlumnoComponent } from './features/alta-alumno/alta-alumno.component';
import { MenuAlumnoComponent } from './features/menu-alumno/menu-alumno.component';
import { ModificarAlumnoComponent } from './features/modificar-alumno/modificar-alumno.component';

const routes: Routes = [
  // {
  //   path: 'posts',
  //   loadChildren: './features/posts/posts.module#PostsModule'
  // },
  {
    path: 'carrera',
    component: CareerDetailComponent
  },
  {
    path: 'menu-alumno',
    component: MenuAlumnoComponent
  },
  {
    path: 'modificar-alumno',
    component: ModificarAlumnoComponent
  },
  {
    path: 'alta-alumno',
    component: AltaAlumnoComponent
  },
  {
    path: 'login',
    loadChildren: './features/login/login.module#LoginModule'
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
