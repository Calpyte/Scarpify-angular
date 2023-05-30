import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerBidComponent } from './buyer-bid.component';
import { BuyerBidDetailComponent } from './buyer-bid-detail/buyer-bid-detail.component';

const routes: Routes = [
  {
    path: '',
    component:BuyerBidComponent,
  },
  {
    path: 'detail',
    component:BuyerBidDetailComponent,
  },
];

export const BuyerBidRoutes = RouterModule.forChild(routes);
