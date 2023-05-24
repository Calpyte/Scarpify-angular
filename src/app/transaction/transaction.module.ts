import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { DateComponent } from './date/date.component';
import { CommonSharedModule } from '../common/common.module';

@NgModule({
  imports: [
    CommonModule,
    CommonSharedModule
  ],
  declarations: [TransactionComponent, DateComponent]

})
export class TransactionModule { }
