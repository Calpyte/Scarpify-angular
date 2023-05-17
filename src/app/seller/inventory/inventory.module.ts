import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { InventoryRoutes } from './inventory.routing';
import { FormsModule } from '@angular/forms';
import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';
import { InventoryProductListComponent } from './inventory-product-list/inventory-product-list.component';
import { CommonSharedModule } from 'src/app/common/common.module';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutes,
    CommonSharedModule
  ],
  declarations: [InventoryComponent, InventoryDetailComponent, InventoryProductListComponent, ProductAddComponent]
})
export class InventoryModule { }
