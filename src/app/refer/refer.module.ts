import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferComponent } from './refer.component';
import { ReferRoutes } from './refer.routing';

@NgModule({
  imports: [
    CommonModule,
    ReferRoutes
  ],
  declarations: [ReferComponent]
})
export class ReferModule { }
