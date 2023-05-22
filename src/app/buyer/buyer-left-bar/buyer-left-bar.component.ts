import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BidByCategoryComponent } from '../bid-by-category/bid-by-category.component';

@Component({
  selector: 'app-buyer-left-bar',
  templateUrl: './buyer-left-bar.component.html',
  styleUrls: ['./buyer-left-bar.component.css']
})
export class BuyerLeftBarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  bidByCategory() {
    const dialogRef = this.dialog.open(BidByCategoryComponent, {
      width: '480px',
      minHeight: '1000px',

      position: { left: '0',top:'8vh' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
