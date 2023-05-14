import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'inventory',
    loadChildren: () => import('./inventory/inventory.module')
      .then(m => m.InventoryModule)
  },
  {
    path: 'bid',
    loadChildren: () => import('./bid/bid.module')
      .then(m => m.BidModule)
  }
];

export const SellerRoutes = RouterModule.forChild(routes);
