import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-type-transaction',
  templateUrl: './type-transaction.component.html',
  styleUrls: ['./type-transaction.component.css']
})
export class TypeTransactionComponent implements OnInit {
  isViewDetail: boolean = false;
  @Output() onPaymentSelect: EventEmitter<boolean> = new EventEmitter();
  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data2: any) { }

  ngOnInit() {
  }

  paymentSelect(event) {
    this.onPaymentSelect.emit(event);
  }
}
