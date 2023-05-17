import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ApiConfigService } from 'src/app/common/api-config';
import { InventoryProductListComponent } from './inventory-product-list/inventory-product-list.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductsPickerComponent } from 'src/app/common/products-picker/products-picker.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventoryData: any = null;
  updatedStocks: any[] = [];
  categories: any[] = [];
  selectedCheckboxIds: any[] = [];
  stockForm: FormGroup;
  @ViewChildren(InventoryProductListComponent) inventoryList: QueryList<InventoryProductListComponent>;
  constructor(
    private http: HttpClient,
    private apiConfigService: ApiConfigService,
    public dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.getInventory();
  }

  getStockForm() {
    this.stockForm = this.fb.group({
      stock: this.fb.array([])
    })
  }

  addItem(): void {
    const itemFormGroup = this.fb.group({
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      marketPrice: ['']
    });
    this.itemsFormArray.push(itemFormGroup);
  }

  get itemsFormArray(): FormArray {
    return this.stockForm.get('stock') as FormArray;
  }



  getInventory = () => {
    this.http.get(this.apiConfigService.getInventories).subscribe((data) => {
      this.inventoryData = data;
    });
  }

  addProduct = async () => {
    this.selectedCheckboxIds = [...this.inventoryData?.stock?.map((e) => e?.product?.id)]
    const dialogRef = this.dialog.open(ProductAddComponent, {
      width: '492px',
      data: { selectedCheckboxIds: this.selectedCheckboxIds },
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        let newStock = [];
        res.forEach((category) => {
          newStock = [...newStock, ...category?.products];
        });
        newStock = newStock?.map((s) => {
          return { product: s, name: s?.name, quantity: 0, price: 0, unit: null, icon: null };
        });
        this.updatedStocks = [...this.updatedStocks, ...newStock];
        this.updateInventory();
      }
    });
  }

  updateInventory = () => {
    this.inventoryList.forEach(child => {
      child.submit();
    });
    let result = {
      id: this.inventoryData?.id,
      stock: this.updatedStocks
    }
    this.updatedStocks = [];
    this.http.post(this.apiConfigService.saveInventory, result).subscribe((data) => {
      alert("Updated Successfully !");
      this.getInventory();
    });
  }
}
