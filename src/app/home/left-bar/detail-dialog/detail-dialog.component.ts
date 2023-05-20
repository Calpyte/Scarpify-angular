import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.css']
})
export class DetailDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit() {

  }

  placeBid(selectedConsumer) {
    this.dialogRef.close(selectedConsumer);
  }

  close = (res) => {
    this.dialogRef.close(res)
  }

}
