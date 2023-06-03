import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { QuantityDetailsComponent } from './quantity-details/quantity-details.component';
import { RatingComponent } from './rating/rating.component';
import { SelectReasonsComponent } from './select-reasons/select-reasons.component';
import { TypeTransactionComponent } from './type-transaction/type-transaction.component';
import { CommonSharedModule } from '../common/common.module';

@NgModule({
  imports: [
    CommonModule,
    CommonSharedModule,
  ],
  declarations: [TransactionComponent, ProductDetailsComponent, QuantityDetailsComponent, RatingComponent, SelectReasonsComponent, TypeTransactionComponent],
  exports: [ProductDetailsComponent, QuantityDetailsComponent, RatingComponent, SelectReasonsComponent, TypeTransactionComponent, TransactionComponent]
})
export class TransactionModule { }
