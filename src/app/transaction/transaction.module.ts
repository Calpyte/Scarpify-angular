import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { ContactUsComponent } from '../referral/contactUs/ContactUs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TransactionComponent]
})
export class TransactionModule { }
