import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {

      path: 'scraprates',
      loadChildren: () => import('./scraprates/scraprates.module')
        .then(m => m.ScrapratesModule)
    },

    {

      path: 'contactUs',
      loadChildren: () => import('./contactUs/contactUs.module')
        .then(m => m.ContactUsModule)
    }

];

export const ReferralRoutes = RouterModule.forChild(routes);
