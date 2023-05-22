import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerComponent } from './buyer.component';
import { CommonSharedModule } from '../common/common.module';
import { BidByCategoryComponent } from './bid-by-category/bid-by-category.component';
import { BuyerRoutingModule } from './buyer-routing.module';
import { BuyerLeftBarComponent } from './buyer-left-bar/buyer-left-bar.component';

@NgModule({
  imports: [
    CommonModule,
    CommonSharedModule,
    BuyerRoutingModule
  ],
  declarations: [BuyerComponent, BidByCategoryComponent, BuyerLeftBarComponent]
})
export class BuyerModule { }
