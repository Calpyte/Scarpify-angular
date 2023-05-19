import { ContactUsRoutes } from './contactUs.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './ContactUs.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    ContactUsRoutes,
    FormsModule,
    MatCardModule

  ],
  declarations: [ContactUsComponent]
})
export class ContactUsModule { }
