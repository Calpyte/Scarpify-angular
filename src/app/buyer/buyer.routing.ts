import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'buyer-bid',
    loadChildren: () => import('./buyer-bid/buyer-bid.module')
      .then(m => m.BuyerBidModule)

   },
];

export const BuyerRoutes = RouterModule.forChild(routes);
