import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { LeftBarComponent } from './home/left-bar/left-bar.component';
import { ProductsComponent } from './home/left-bar/products/products.component';
import { SellersNearbyComponent } from './home/left-bar/sellers-nearby/sellers-nearby.component';


@NgModule({
  declarations: [
    HomeComponent,
    LeftBarComponent,
    ProductsComponent,
    SellersNearbyComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
