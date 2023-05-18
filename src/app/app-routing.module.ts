import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule)
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
