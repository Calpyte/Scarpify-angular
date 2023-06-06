import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-bid-by-routes',
  templateUrl: './bid-by-routes.component.html',
  styleUrls: ['./bid-by-routes.component.css']
})
export class BidByRoutesComponent implements OnInit {
  step: number = 0;
  bidsArray: FormArray;
  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {

  }

  get routeData() {
    return this.data?.routeData;
  }

  get formData() {
    return this.data?.formData;
  }


  ngOnInit() {
    this.bidsArray = this.fb.array([]);
    this.data?.routeData?.data?.forEach((e) => {
      let stock = e?.stock?.find((e) => e?.product?.id === this.formData?.selectedProduct?.id);
      this.addStockGroup({
        availableQty: stock?.quantity,
        requestedQty: 0,
        marketPrice: stock?.price,
        expectedPrice: stock?.price,
        bidPrice: 0,
        detail: e
      });
    })
  }

  addStockGroup(stock) {
    const add = this.bidsArray as FormArray;
    add.push(this.fb.group({
      availableQty: [stock?.availableQty],
      requestedQty: [stock?.requestedQty],
      marketPrice: [stock?.marketPrice],
      expectedPrice: [stock?.expectedPrice],
      bidPrice: [stock?.bidPrice],
      detail: [stock?.detail],
    }))
  }

  get totalAmount() {
    let amount = 0
    this.bidsArray.controls.forEach(element => {
      amount = amount + (element.value.requestedQty * element.value.bidPrice);
    });
    return amount;
  }
  reviewBid = () => {
    this.step = 1;
  }

}
