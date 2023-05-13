import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerComponent } from './seller.component';
import { SellerRoutes } from './seller.routing';

@NgModule({
  imports: [
    CommonModule,
    SellerRoutes
  ],
  declarations: [SellerComponent]
})
export class SellerModule { }
