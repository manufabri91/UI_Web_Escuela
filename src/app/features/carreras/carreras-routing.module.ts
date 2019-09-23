import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItComponent } from './it/it.component';
import { AfComponent } from './af/af.component';
import { DsComponent } from './ds/ds.component';
import { AppModule } from 'src/app/app.module';


const routes: Routes = [
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
    path: '',
    redirectTo: '/',
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
export class CarrerasRoutingModule { }
