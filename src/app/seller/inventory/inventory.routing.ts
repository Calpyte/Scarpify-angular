import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory.component';

const routes: Routes = [
  {
    path : '',
    component : InventoryComponent
   },
];

export const InventoryRoutes = RouterModule.forChild(routes);
