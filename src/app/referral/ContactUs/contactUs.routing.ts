import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './ContactUs.component';

const routes: Routes = [
  { 
    

      path : '',
      component : ContactUsComponent
     },
   
];

export const ContactUsRoutes = RouterModule.forChild(routes);
