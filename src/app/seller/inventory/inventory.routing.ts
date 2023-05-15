import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';

const routes: Routes = [
  {
    path : '',
    component : InventoryComponent
   },
  {
    path : 'detail',
    component : InventoryDetailComponent
   },
];

export const InventoryRoutes = RouterModule.forChild(routes);
