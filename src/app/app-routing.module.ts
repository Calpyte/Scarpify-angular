import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/AuthGuard/auth.guard';
import { BlankComponent } from './common/blank/blank.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'seller',
    canActivate: [AuthGuard],
    loadChildren: () => import('./seller/seller.module')
      .then(m => m.SellerModule)
  },
  {
    path: 'blank',
    component: BlankComponent
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
