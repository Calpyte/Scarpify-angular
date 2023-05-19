import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerComponent } from './buyer.component';
import { CommonSharedModule } from '../common/common.module';
import { PlaceBidComponent } from '../home/home/place-bid/place-bid.component';

@NgModule({
  imports: [
    CommonModule,
    CommonSharedModule
  ],
  declarations: [BuyerComponent]
})
export class BuyerModule { }
