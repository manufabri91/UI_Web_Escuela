import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuAlumnoComponent } from './menu-alumno/menu-alumno.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ModificarAlumnoComponent } from './modificar-alumno/modificar-alumno.component';
import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';


const routes: Routes = [
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
    path: '',
    redirectTo: 'menu-alumno',
    pathMatch: 'full'
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
export class AbmAlumnosRoutingModule { }
