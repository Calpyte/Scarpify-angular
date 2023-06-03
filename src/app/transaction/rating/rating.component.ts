import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
[x: string]: any;
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
