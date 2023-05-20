import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'src/app/common/toastr/toastr.service';


@Component({
  selector: 'app-bid-create',
  templateUrl: './bid-create.component.html',
  styleUrls: ['./bid-create.component.css']
})
export class BidCreateComponent implements OnInit {
  @Input() inventory: any;
  step: number = 0;

  constructor(private toastrService: ToastrService, private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit() {
    if (this.inventory) {

    }
  }


  close = (res) => {
    this.dialogRef.close(res);
    // this.dialog.closeAll();
  }

  reviewBid = (event) => {
    this.step++;
  }

}
