import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrerasRoutingModule } from './carreras-routing.module';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DsComponent } from './ds/ds.component';
import { ItComponent } from './it/it.component';
import { AfComponent } from './af/af.component';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [DsComponent, ItComponent, AfComponent],
  imports: [
    CommonModule,
    CarrerasRoutingModule,
    RouterModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CarrerasModule { }
