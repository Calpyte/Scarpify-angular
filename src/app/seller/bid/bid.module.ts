import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BidComponent } from './bid.component';
import { BidRoutes } from './bid.routing';
import { BidDetailComponent } from './bid-detail/bid-detail.component';
import { BidService } from './bid.service';

@NgModule({
  imports: [
    CommonModule,
    BidRoutes
  ],
  declarations: [BidComponent, BidDetailComponent],
  providers: [
    BidService
  ]
})
export class BidModule { }
