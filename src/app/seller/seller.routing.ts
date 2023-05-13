import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 {
    path: 'inventory',
    loadChildren: () => import('./inventory/inventory.module')
      .then(m => m.InventoryModule)
  }
];

export const SellerRoutes = RouterModule.forChild(routes);
