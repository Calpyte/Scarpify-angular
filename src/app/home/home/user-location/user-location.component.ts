import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.css']
})
export class UserLocationComponent implements OnInit {

  isViewDetail: boolean = false;

  constructor() { }

  location: any = {
    lat: 13.0827,
    lng: 80.2707
  }
  @Input() style: string = "height:92vh";


  ngOnInit() {
    this.getCurrentLocation();
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

  toggleMoreDetails = () => {
    this.isViewDetail = !this.isViewDetail;
  }

  circleLatitude: number = 13.0827; // Example circle latitude
  circleLongitude: number = 80.2707; // Example circle longitude
  circleRadius: number = 10000; // Example circle radius in meters

  circleFillColor: string = '#00ca91'; // Example fill color (red)
  circleStrokeColor: string = '#00ca91'; // Example stroke color (blue)
  circleFillOpacity: number = 0.2; // Example fill opacity (0.5)
  circleStrokeWeight: number = 0; // Example stroke weight (2)

}
