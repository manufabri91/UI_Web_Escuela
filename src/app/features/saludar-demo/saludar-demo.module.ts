import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { FormsModule } from '@angular/forms';

import { SaludarDemoRoutingModule } from './saludar-demo-routing.module';
import { SaludarComponent } from './saludar/saludar.component';
import { SaludarService } from 'src/app/core/services/saludar.service';


@NgModule({
  declarations: [SaludarComponent],
  imports: [
    CommonModule,
    FormsModule,
    SaludarDemoRoutingModule
  ],
  providers: [SaludarService]
})
export class SaludarDemoModule { }
