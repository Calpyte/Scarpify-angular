import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConsumerDetailsComponent } from '../../consumer-details/consumer-details.component';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';
import { PlaceBidComponent } from '../../place-bid/place-bid.component';

@Component({
  selector: 'app-sellers-nearby',
  templateUrl: './sellers-nearby.component.html',
  styleUrls: ['./sellers-nearby.component.css']
})
export class SellersNearbyComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  sellers: any = [
    {
      id: 0,
      name: 'Dinesh'
    },
    {
      id: 1,
      name: 'Kumar'
    },
    {
      id: 2,
      name: 'Kishore'
    }
  ]

  ngOnInit() {

  }

  openBidDialog(user): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(PlaceBidComponent, {
      data: user,
      hasBackdrop: true,
      minWidth: '50%',
      width: '80%'
    });
    dialogRef.afterClosed().subscribe(result => {
      // alert(JSON.stringify(result));
    });
  }

  openDialog(user): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(DetailDialogComponent, {
      data: user,
      hasBackdrop: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.openBidDialog(result);
      }
    });
  }

  openDetail = (user) => {
    this.openDialog(user);
  }

}
