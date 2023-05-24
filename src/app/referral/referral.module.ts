import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferralComponent } from './referral.component';
import { ScrapratesRoutes } from './scraprates/scraprates.routing';
import { ReferralRoutes } from './referral.routing';
import { ReferralService } from './referral.service';
import { ContactUsComponent } from './contactUs/ContactUs.component';

@NgModule({
  imports: [
    CommonModule,
    ReferralRoutes,
  ],
  declarations: [ReferralComponent,],
  providers: [
    ReferralService
  ]
})
export class ReferralModule { }
