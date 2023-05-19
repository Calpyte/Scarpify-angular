import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConsumerDetailsComponent } from '../../consumer-details/consumer-details.component';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';

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

  openDialog(user): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(DetailDialogComponent, {
      data: user,
      hasBackdrop: false
    });
    dialogRef.afterClosed().subscribe(result => {
      // alert(JSON.stringify(result));
    });
  }

  openDetail = (user) => {
    this.openDialog(user);
  }

}
