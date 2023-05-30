import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerBidComponent } from './buyer-bid.component';
import {  BuyerRoutes } from '../buyer.routing';
import { CommonSharedModule } from 'src/app/common/common.module';
import { BuyerBidDetailComponent } from './buyer-bid-detail/buyer-bid-detail.component';
import { BuyerBidService } from './buyer-bid.service';
import { BuyerBidRoutes } from './buyer-bid.routing';

@NgModule({
  imports: [
    CommonModule,
    BuyerBidRoutes,
    CommonSharedModule
  ],
  declarations: [BuyerBidComponent,BuyerBidDetailComponent],
  providers: [
    BuyerBidService
  ]
})
export class BuyerBidModule { }
