import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SaludarComponent } from './saludar/saludar.component';
import { SaludarService } from './services/saludar.service';

@NgModule({
  declarations: [SaludarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SaludarComponent],
  providers: [
    SaludarService,
  ]
})
export class CoreModule { }
