import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { InventoryRoutes } from './inventory.routing';
import { FormsModule } from '@angular/forms';
import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutes,
    FormsModule
  ],
  declarations: [InventoryComponent, InventoryDetailComponent,]
})
export class InventoryModule { }
