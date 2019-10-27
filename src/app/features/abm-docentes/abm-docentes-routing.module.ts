import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuDocenteComponent } from './menu-docente/menu-docente.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AltaDocenteComponent } from './alta-docente/alta-docente.component';
import { ModificarDocenteComponent } from './modificar-docente/modificar-docente.component';

const routes: Routes = [
  {
    path: 'menu-docente',
    component: MenuDocenteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'modificar-docente/:legajo',
    component: ModificarDocenteComponent,
    canActivate: [AuthGuard]
  },
   {
    path: 'alta-docente',
    component: AltaDocenteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'menu-docente',
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
export class AbmDocenteRoutingModule { }
