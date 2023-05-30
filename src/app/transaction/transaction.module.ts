import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { ContactUsComponent } from '../referral/contactUs/ContactUs.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { BuyerQuantityDetailsComponent } from './buyer-quantity-details/buyer-quantity-details.component';

@NgModule({
  imports: [
    CommonModule,
    NgxStarRatingModule
  ],
  declarations: [TransactionComponent, BuyerQuantityDetailsComponent]
})
export class TransactionModule { }
