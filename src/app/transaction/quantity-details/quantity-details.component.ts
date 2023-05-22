import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-quantity-details',
  templateUrl: './quantity-details.component.html',
  styleUrls: ['./quantity-details.component.css']
})
export class QuantityDetailsComponent implements OnInit {
  isViewDetail: boolean = false;
  @Input() data: any;
  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data2: any,) { }

  ngOnInit() {
  }

  toggleMoreDetails = () => {
    this.isViewDetail = !this.isViewDetail;
  }

}
