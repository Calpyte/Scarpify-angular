import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from 'src/app/common/api-config';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class InventoryComponent implements OnInit {
  inventoryData: any = null;
  selectedCheckboxIds: any[] = [];
  form: FormGroup;
  constructor(
    private http: HttpClient,
    private apiConfigService: ApiConfigService,
    public dialog: MatDialog,
    private fb: FormBuilder) {
    this.form = fb.group({
      stocks: fb.array([])
    })
  }

  addStockGroup(stock) {
    const add = this.form.get('stocks') as FormArray;
    add.push(this.fb.group({
      quantity: [stock?.quantity],
      marketPrice: [stock?.marketPrice],
      price: [stock?.price],
      name: [stock?.name],
      product: [stock?.product],
      icon: [stock?.icon],
      unit: [stock?.unit]
    }))
  }

  ngOnInit() {
    this.getInventory();
  }

  resetForm = () => {
    this.form = this.fb.group({
      stocks: this.fb.array([])
    })
  }

  getInventory = () => {
    this.resetForm();
    this.http.get(this.apiConfigService.getInventories).subscribe((data: any) => {
      this.inventoryData = data;
      data?.stock.forEach((e) => {
        this.addStockGroup(e);
      })
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
        newStock?.forEach((s) => {
          this.addStockGroup({ product: s, name: s?.name, quantity: 0, price: 0, unit: null, icon: null });
        });
      }
    });
  }

  updateInventory = () => {
    console.log(this.form.value)
    if (this.form.valid) {
      let result = {
        id: this.inventoryData?.id,
        stock: this.form?.value?.stocks
      }
      this.http.post(this.apiConfigService.saveInventory, result).subscribe((data) => {
        alert("updated successfully");
        this.getInventory();
      });
    }
  }
}
