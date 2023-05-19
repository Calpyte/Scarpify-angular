import { Routes, RouterModule } from '@angular/router';
import { ReferComponent } from './refer.component';

const routes: Routes = [
  {
    path: '',
    component: ReferComponent
   },
];

export const ReferRoutes = RouterModule.forChild(routes);
