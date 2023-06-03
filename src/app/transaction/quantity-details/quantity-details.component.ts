import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-quantity-details',
  templateUrl: './quantity-details.component.html',
  styleUrls: ['./quantity-details.component.css']
})
export class QuantityDetailsComponent implements OnInit {
  totalAmount: number = 0;
  isViewDetail: boolean = false;
  @Input() pendingItems: any[];
  @Output() onNextClick: EventEmitter<any> = new EventEmitter();
  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data2: any,) { }

  ngOnInit() {
    this.prepareTotalAmount();
  }
  prepareTotalAmount() {
    if (!!this.pendingItems && !!this.pendingItems[0] && !!this.pendingItems[0].consumer && !!this.pendingItems[0].consumer.proposals) {
      this.pendingItems[0].consumer.proposals.forEach((item: any) => {
        this.totalAmount += (item.qty + item.amount);
      });
    }
  }
  actionClick(event: any) {
    let data = { "actionClick": event, "totalAmount": this.totalAmount };
    this.onNextClick.emit(data);
  }
}
