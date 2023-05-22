import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductAddComponent } from './product-add/product-add.component';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';
import { InventoryService } from './inventory.service';
import { ToastrService } from 'src/app/common/toastr/toastr.service';
import { ConfirmationDialogService } from 'src/app/common/confirmation-dialog/confirmation-dialog.service';

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
    private inventoryService: InventoryService,
    public dialog: MatDialog,
    private toastToastrService: ToastrService,
    private confirmationDialogService: ConfirmationDialogService,
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
      icon2: [stock?.icon2],
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
    this.inventoryService.getInventory().subscribe((data: any) => {
      this.inventoryData = data;
      data?.stock.forEach((e) => {
        this.addStockGroup(e);
      })
    });
  }

  deleteInventory = () => {
    this.confirmationDialogService.openModal({ title: "Are you sure to delete" }).afterClosed().subscribe((res) => {
      if (res) {

      }
    })
  }

  addProduct = async () => {
    if (this.inventoryData?.stock?.length > 0) {
      this.selectedCheckboxIds = [...this.inventoryData?.stock?.map((e) => e?.product?.id)]
    }
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
          this.addStockGroup({ product: s, name: s?.name, quantity: 0, price: 0, unit: null, icon: null, icon2: null });
        });
      }
    });
  }

  updateInventory = () => {
    // console.log(this.form.value)
    if (this.form.valid) {
      let result = {
        id: this.inventoryData?.id,
        stock: this.form?.value?.stocks
      }
      this.inventoryService.updateInventory(result).subscribe((data) => {
        this.toastToastrService.showSuccess("Inventory Updated Successfully !", "");
        this.getInventory();
      });
    }
  }

  onFileChange(event: any, controlName: string, index: number) {
    const previewImage = document.getElementById(controlName + index);
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      if (file) {
        this.form.controls['stocks'].value[index][controlName] = file;
        const objectURL = URL.createObjectURL(file);
        previewImage['src'] = objectURL;
      }
    }
    console.log(this.form.controls['stocks'].value);
  }
}
