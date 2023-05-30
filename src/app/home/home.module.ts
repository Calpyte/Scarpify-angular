import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { CommonSharedModule } from '../common/common.module';
import { ConsumerDetailsComponent } from './consumer-details/consumer-details.component';
import { DetailDialogComponent } from './left-bar/detail-dialog/detail-dialog.component';
import { ProductsComponent } from './left-bar/products/products.component';
import { SellersNearbyComponent } from './left-bar/sellers-nearby/sellers-nearby.component';
import { UserLocationComponent } from './user-location/user-location.component';
import { PlaceBidComponent } from './bid-create/place-bid/place-bid.component';
import { BidCreateComponent } from './bid-create/bid-create.component';
import { ReviewBidComponent } from './bid-create/review-bid/review-bid.component';
import { DateComponent } from '../transaction/date/date.component';
import { TransactionComponent } from '../transaction/transaction.component';



@NgModule({
  declarations: [
    HomeComponent,
    LeftBarComponent,
    ProductsComponent,
    SellersNearbyComponent,
    UserLocationComponent,
    ConsumerDetailsComponent,
    DetailDialogComponent,
    PlaceBidComponent,
    BidCreateComponent,
    ReviewBidComponent,
    DateComponent,
    TransactionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonSharedModule
  ]
})
export class HomeModule { }
