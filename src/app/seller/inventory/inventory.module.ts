import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { InventoryRoutes } from './inventory.routing';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutes
  ],
  declarations: [InventoryComponent]
})
export class InventoryModule { }
