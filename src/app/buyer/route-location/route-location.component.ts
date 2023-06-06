import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouteDialogComponent } from './route-dialog/route-dialog.component';
import { BidByRoutesComponent } from './bid-by-routes/bid-by-routes.component';

@Component({
  selector: 'app-route-location',
  templateUrl: './route-location.component.html',
  styleUrls: ['./route-location.component.css']
})
export class RouteLocationComponent implements OnInit, OnChanges {
  @Input() location: any;
  @Input() mapData: any;
  @Input() distance: number;
  circleFillColor: string = '#c1efe1'; // Example fill color (red)
  circleStrokeColor: string = '#c1efe1'; // Example stroke color (blue)
  circleFillOpacity: number = 0.3; // Example fill opacity (0.5)
  circleStrokeWeight: number = 0;
  icon: any = {
    url: 'https://www.shareicon.net/data/512x512/2016/07/24/800943_location_512x512.png',
    scaledSize: {
      width: 32,
      height: 32
    }
  }


  constructor(private dialog: MatDialog) { }


  ngOnInit() {

  }

  placeBid = () => {
    this.dialog.open(BidByRoutesComponent, {
      width: '75%',
      data: this.mapData,
      hasBackdrop: true,
    }).afterClosed().subscribe((res) => {
      if (res === 'place-bid') {

      }
    })
  }

  onLineClick() {
    this.dialog.closeAll();
    this.dialog.open(RouteDialogComponent, {
      width: '380px',
      data: this.mapData,
      hasBackdrop: false,
    }).afterClosed().subscribe((res) => {
      if (res === 'place-bid') {
        this.placeBid();
      }
    })
  }

  ngOnChanges() {
    // console.log(this.mapData);
  }

}
