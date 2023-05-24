import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-location',
  templateUrl: './route-location.component.html',
  styleUrls: ['./route-location.component.css']
})
export class RouteLocationComponent implements OnInit, OnChanges {
  @Input() location: any;
  @Input() mapData: any;
  @Input() distance: number;
  circleFillColor: string = '#00ca91'; // Example fill color (red)
  circleStrokeColor: string = '#00ca91'; // Example stroke color (blue)
  circleFillOpacity: number = 0.2; // Example fill opacity (0.5)
  circleStrokeWeight: number = 0;
  icon: any = {
    url: 'https://www.shareicon.net/data/512x512/2016/07/24/800943_location_512x512.png',
    scaledSize: {
      width: 32,
      height: 32
    }
  }


  constructor() { }


  ngOnInit() {

  }

  ngOnChanges() {
  }

}
