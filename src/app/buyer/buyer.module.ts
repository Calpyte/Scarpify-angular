import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerComponent } from './buyer.component';
import { CommonSharedModule } from '../common/common.module';
import { BidByCategoryComponent } from './bid-by-category/bid-by-category.component';
import { BuyerRoutingModule } from './buyer-routing.module';
import { BuyerLeftBarComponent } from './buyer-left-bar/buyer-left-bar.component';
import { RouteLocationComponent } from './route-location/route-location.component';
import { BuyerService } from './buyer.service';
import { RouteDetailComponent } from './route-detail/route-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CommonSharedModule,
    BuyerRoutingModule
  ],
  declarations: [
    BuyerComponent,
    BidByCategoryComponent,
    BuyerLeftBarComponent,
    RouteLocationComponent,
    RouteDetailComponent
  ],
  providers: [
    BuyerService
  ]
})
export class BuyerModule { }
