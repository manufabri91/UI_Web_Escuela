import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { CareerDetailComponent } from './features/career-detail/career-detail.component';
import { AltaAlumnoComponent } from './features/alta-alumno/alta-alumno.component';
import { MenuAlumnoComponent } from './features/menu-alumno/menu-alumno.component';
import { ModificarAlumnoComponent } from './features/modificar-alumno/modificar-alumno.component';
import { DsComponent } from './core/ds/ds.component';
import { AfComponent } from './core/af/af.component';
import { ItComponent } from './core/it/it.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  // {
  //   path: 'posts',
  //   loadChildren: './features/posts/posts.module#PostsModule'
  // },
  {
    path: 'it',
    component: ItComponent
  },
  {
    path: 'af',
    component: AfComponent
  },
  {
    path: 'ds',
    component: DsComponent
  },
  {
    path: 'carrera',
    component: CareerDetailComponent
  },
  {
    path: 'menu-alumno',
    component: MenuAlumnoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'modificar-alumno/:legajo',
    component: ModificarAlumnoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'alta-alumno',
    component: AltaAlumnoComponent,
    canActivate: [AuthGuard]
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
