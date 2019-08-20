import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerDetailComponent } from './career-detail/career-detail.component';

@NgModule({
  declarations: [CareerDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [CareerDetailComponent]
})
export class FeaturesModule { }
