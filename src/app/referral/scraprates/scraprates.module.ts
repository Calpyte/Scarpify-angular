import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrapratesComponent } from './scraprates.component';
import { ScrapratesRoutes } from './scraprates.routing';
import { FormsModule } from '@angular/forms';
import { ScrapratesDetailsComponent } from './scraprates-details/scraprates-details.component';
import { MatCardModule } from '@angular/material/card';
import { ReferralService } from '../referral.service';

@NgModule({
  imports: [
    CommonModule,
    ScrapratesRoutes,
    FormsModule,
    MatCardModule
  ],
  declarations: [ScrapratesComponent, ScrapratesDetailsComponent],
  providers: [
    ReferralService
  ]
})
export class ScrapratesModule { }
