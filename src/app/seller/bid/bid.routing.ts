import { Routes, RouterModule } from '@angular/router';
import { BidComponent } from './bid.component';

const routes: Routes = [
  {
    path: '',
    component: BidComponent
  },
];

export const BidRoutes = RouterModule.forChild(routes);
