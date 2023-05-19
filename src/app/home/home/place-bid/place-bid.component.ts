import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-place-bid',
  templateUrl: './place-bid.component.html',
  styleUrls: ['./place-bid.component.css']
})
export class PlaceBidComponent implements OnInit {

  inventories: any = [
    1, 2, 3
  ]

  bidForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {
    this.bidForm = fb.group({
      bids: fb.array([])
    })
  }

  ngOnInit() {
  }

  addStockGroup(stock) {
    const add = this.bidForm.get('stocks') as FormArray;
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

  close(res) {
    this.dialogRef.close(res);
  }

}
