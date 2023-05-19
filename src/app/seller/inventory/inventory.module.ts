import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { InventoryRoutes } from './inventory.routing';
import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';
import { CommonSharedModule } from 'src/app/common/common.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { InventoryService } from './inventory.service';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutes,
    CommonSharedModule
  ],
  declarations: [InventoryComponent, InventoryDetailComponent, ProductAddComponent],
  providers: [
    InventoryService
  ]
})
export class InventoryModule { }
