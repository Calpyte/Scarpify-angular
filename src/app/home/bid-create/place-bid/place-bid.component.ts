import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-place-bid',
  templateUrl: './place-bid.component.html',
  styleUrls: ['./place-bid.component.css']
})
export class PlaceBidComponent implements OnInit {

  @Input() inventory: any = {};

  @Output() result: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  bidForm: FormGroup;

  constructor(
    private fb: FormBuilder) {
    this.bidForm = fb.group({
      bids: fb.array([])
    })
  }

  ngOnInit() {
    this.inventory.stock?.forEach((data) => {
      this.addStockGroup({ product: data?.product, availableQty: data?.quantity, marketPrice: data?.quantity, expectedPrice: data?.price, qty: '', amount: '' });
    })
  }

  get totalAmount() {
    let bids = this.bidForm?.controls['bids'];
    let amount = 0;
    bids.value?.forEach((data) => {
      amount = amount + (data?.qty * data?.amount);
    })
    return amount;
  }

  addStockGroup(stock) {
    const add = this.bidForm.get('bids') as FormArray;
    add.push(this.fb.group({
      qty: [stock?.quantity],
      amount: [stock?.amount],
      product: [stock?.product],
      availableQty: [stock?.availableQty],
      marketPrice: [stock?.marketPrice],
      expectedPrice: [stock?.expectedPrice]
    }))
  }

  reviewBid = () => {
    this.result.emit(this.bidForm.value.bids);
  }

  cancel = () => {
    this.close.emit(false);
  }

}
