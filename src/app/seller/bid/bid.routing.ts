import { Routes, RouterModule } from '@angular/router';
import { BidComponent } from './bid.component';
import { BidDetailComponent } from './bid-detail/bid-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BidComponent,
  },
  {
    path: 'detail',
    component: BidDetailComponent,
  },
];

export const BidRoutes = RouterModule.forChild(routes);
