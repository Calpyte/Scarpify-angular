import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BidCreateComponent } from '../bid-create/bid-create.component';
import { ToastrService } from 'src/app/common/toastr/toastr.service';
import { AgmInfoWindow } from '@agm/core';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.css']
})
export class UserLocationComponent implements OnInit {
  @ViewChildren(AgmInfoWindow) infoWindows: QueryList<AgmInfoWindow>;
  @Input() inventories: any = [];
  polyLinePoints: any[] = [{
    "lat": 13.0827,
    "lng": 80.2707
  },
  {
    "lat": 13.1827,
    "lng": 80.3707
  },
  {
    "lat": 13.0827,
    "lng": 80.4707
  }];

  location: any = {
    lat: 13.0827,
    lng: 80.2707
  }

  @Input() style: string = "height:92vh";
  circleLatitude: number = 13.0827; // Example circle latitude
  circleLongitude: number = 80.2707; // Example circle longitude
  circleRadius: number = 10000; // Example circle radius in meters

  circleFillColor: string = '#00ca91'; // Example fill color (red)
  circleStrokeColor: string = '#00ca91'; // Example stroke color (blue)
  circleFillOpacity: number = 0.2; // Example fill opacity (0.5)
  circleStrokeWeight: number = 0; // Example stroke weight (2)

  icon: any = {
    url: 'https://www.shareicon.net/data/512x512/2016/07/24/800943_location_512x512.png',
    scaledSize: {
      width: 32,
      height: 32
    }
  }

  constructor(public dialog: MatDialog, private toastrService: ToastrService) { }


  ngOnInit() {
    this.getCurrentLocation();
  }

  openInfoWindow(infoWindow: AgmInfoWindow) {
    this.infoWindows.forEach((window: AgmInfoWindow) => {
      if (window !== infoWindow && window.isOpen) {
        window.close();
      }
    });

    infoWindow.open();
  }

  getCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.location.lat = position.coords.latitude;
        this.location.lng = position.coords.longitude;
      }, (error) => {
        console.log(error);
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  markerDragEnd = (event) => {

  }

  infoWindowClose = (event) => {
    alert(event);
  }

  placeBid = (event) => {
    this.openBidDialog(event);
  }

  openBidDialog(inventory): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(BidCreateComponent, {
      data: inventory,
      hasBackdrop: true,
      minWidth: '25%',
      maxWidth: '80%',
      width: 'auto',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.toastrService.showSuccess("Bid created successfully !");
      }
    });
  }



}
