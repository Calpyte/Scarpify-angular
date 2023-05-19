import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { FaqRoutes } from './faq.routing';
import { CommonSharedModule } from '../common/common.module';

@NgModule({
  imports: [
    CommonModule,
    FaqRoutes,
    CommonSharedModule
  ],
  declarations: [FaqComponent]
})
export class FaqModule { }
