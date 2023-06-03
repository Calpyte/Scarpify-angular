import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-select-reasons',
  templateUrl: './select-reasons.component.html',
  styleUrls: ['./select-reasons.component.css']
})
export class SelectReasonsComponent implements OnInit {
  isViewDetail: boolean = false;
  @Input() data: any;
  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data2: any) { }

  ngOnInit() {
  }
  toggleMoreDetails = () => {
    this.isViewDetail = !this.isViewDetail;
  }

}
