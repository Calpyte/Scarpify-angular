import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { ContactUsComponent } from '../referral/contactUs/ContactUs.component';
import { NgxStarRatingModule } from 'ngx-star-rating';

@NgModule({
  imports: [
    CommonModule,
    NgxStarRatingModule
  ],
  declarations: [TransactionComponent]
})
export class TransactionModule { }
