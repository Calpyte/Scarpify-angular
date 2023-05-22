import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';
import { BidCreateComponent } from '../../bid-create/bid-create.component';
import { ToastrService } from 'src/app/common/toastr/toastr.service';

@Component({
  selector: 'app-sellers-nearby',
  templateUrl: './sellers-nearby.component.html',
  styleUrls: ['./sellers-nearby.component.css']
})
export class SellersNearbyComponent implements OnInit {

  constructor(public dialog: MatDialog, private toastrService: ToastrService) { }

  @Input() inventories: any = [];

  ngOnInit() {

  }

  openDetail = (user) => {
    this.openDetailDialog(user);
  }


  openDetailDialog(user): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(DetailDialogComponent, {
      maxHeight: '90vh',
      data: user,
      hasBackdrop: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.openBidDialog(result);
      }
    });
  }

  openBidDialog(user): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(BidCreateComponent, {
      data: user,
      hasBackdrop: true,
      minWidth: '25%',
      maxWidth: '80%',
      width: 'auto',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.toastrService.showSuccess("Bid created successfully !");
      }
    });
  }

}
