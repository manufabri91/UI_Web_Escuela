import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaludarComponent } from './saludar/saludar.component';


const routes: Routes = [
  {
    path: '',
    component: SaludarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaludarDemoRoutingModule { }
