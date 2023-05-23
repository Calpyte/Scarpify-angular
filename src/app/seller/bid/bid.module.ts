import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BidComponent } from './bid.component';
import { BidRoutes } from './bid.routing';
import { BidDetailComponent } from './bid-detail/bid-detail.component';
import { BidService } from './bid.service';
import { MessageBoxComponent } from './message-box/message-box.component';
import { CommonSharedModule } from 'src/app/common/common.module';

@NgModule({
  imports: [
    CommonModule,
    BidRoutes,
    CommonSharedModule
  ],
  declarations: [BidComponent, BidDetailComponent, MessageBoxComponent],
  providers: [
    BidService
  ]
})
export class BidModule { }
