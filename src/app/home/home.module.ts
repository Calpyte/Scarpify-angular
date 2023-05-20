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
import { PlaceBidComponent } from './place-bid/place-bid.component';
import { UserLocationComponent } from './user-location/user-location.component';



@NgModule({
  declarations: [
    HomeComponent,
    LeftBarComponent,
    ProductsComponent,
    SellersNearbyComponent,
    UserLocationComponent,
    ConsumerDetailsComponent,
    DetailDialogComponent,
    PlaceBidComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonSharedModule
  ]
})
export class HomeModule { }
