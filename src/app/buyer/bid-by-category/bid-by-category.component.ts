import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bid-by-category',
  templateUrl: './bid-by-category.component.html',
  styleUrls: ['./bid-by-category.component.css']
})
export class BidByCategoryComponent implements OnInit {
  bid: any = {
    category: "",
    subCategory: "",
    quantity: 0,
    distance: 0
  };
  constructor(public dialogRef: MatDialogRef<BidByCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  onDialogClose() {
    this.dialogRef.close();
  }
  onSubmit(f: NgForm) {
    // stop here if form is invalid
    if (f.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.bid, null, 4));
  }
}
