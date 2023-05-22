import { ReferModule } from './refer/refer.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/AuthGuard/auth.guard';
import { BlankComponent } from './common/blank/blank.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module')
      .then(m => m.FaqModule)
  },
  {
    path: 'refer',
    loadChildren: () => import('./refer/refer.module')
      .then(m => m.ReferModule)
  },
  {
    path: 'seller',
    loadChildren: () => import('./seller/seller.module')
      .then(m => m.SellerModule)
  },
  {
    path: 'referral',
    loadChildren: () => import('./referral/referral.module')
      .then(m => m.ReferralModule)
  },
  {
    path: 'blank',
    component: BlankComponent
  },
  {
    path: 'buyer',
    loadChildren: () => import('./buyer/buyer.module')
      .then(m => m.BuyerModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
