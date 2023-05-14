import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BidComponent } from './bid.component';
import { BidRoutes } from './bid.routing';

@NgModule({
  imports: [
    CommonModule,
    BidRoutes
  ],
  declarations: [BidComponent]
})
export class BidModule { }
