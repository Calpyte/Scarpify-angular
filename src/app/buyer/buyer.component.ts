import { Component, OnInit } from '@angular/core';
import { BuyerService, RoutesByFilter } from './buyer.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  location: any = { lat: 13.0827, lng: 80.2707 };
  routes: any = [];
  mapData: any = null;
  distance: any = 10;

  constructor(private buyerService: BuyerService) { }



  getCurrentLocation() {
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

  ngOnInit() {
    this.getCurrentLocation();

  }

  getFilter = (filter: RoutesByFilter) => {
    filter.lat = this.location.lat;
    filter.lng = this.location.lng;
    this.distance = filter.distance;
    this.mapData = null;
    this.buyerService.getRoutesByFilter(filter).subscribe((res: any) => {
      let myRoutes = [];
      if (res?.length > 0) {
        res.forEach((route) => {
          let quantity = 0;
          route.data.forEach((e) => {
            quantity = quantity + e?.stock.find((s) => s?.product?.id === filter.product)['quantity'];
          })
          route['quantity'] = quantity;
          myRoutes = [...myRoutes, route];
        })
      }
      this.routes = myRoutes;
    })
  }

  selectedRoute = (event) => {
    this.mapData = event;
    // this.formData = event.formData;
  }

}
