import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-place-bid',
  templateUrl: './place-bid.component.html',
  styleUrls: ['./place-bid.component.css']
})
export class PlaceBidComponent implements OnInit {

  inventories: any = [
    1, 2, 3
  ]

  @Input() inventory: any = {
    id: 0,
    name: 'Dinesh'
  };

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
    this.inventories.forEach((data) => {
      this.addStockGroup({ product: '', availableQty: 5, marketPrice: 323, expectedPrice: 23, qty: '', amount: '' });
    })
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
    console.log(this.bidForm.value.bids);
    this.result.emit(this.bidForm.value.bids);
  }

  cancel = () => {
    this.close.emit(true);
  }

}
