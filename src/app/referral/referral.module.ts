import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferralComponent } from './referral.component';
import { ScrapratesRoutes } from './scraprates/scraprates.routing';
import { ReferralRoutes } from './referral.routing';

@NgModule({
  imports: [
    CommonModule,
    ReferralRoutes
  ],
  declarations: [ReferralComponent]
})
export class ReferralModule { }
