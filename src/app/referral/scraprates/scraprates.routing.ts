import { Routes, RouterModule } from '@angular/router';
import { ScrapratesComponent } from './scraprates.component';
import { ScrapratesDetailsComponent } from './scraprates-details/scraprates-details.component';

const routes: Routes = [
  {

      path : '',
      component : ScrapratesComponent
     },
    {
      path : 'detail',
      component : ScrapratesDetailsComponent
     },

];

export const ScrapratesRoutes = RouterModule.forChild(routes);
