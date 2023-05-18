import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {

      path: 'scraprates',
      loadChildren: () => import('./scraprates/scraprates.module')
        .then(m => m.ScrapratesModule)
    },



];

export const ReferralRoutes = RouterModule.forChild(routes);
