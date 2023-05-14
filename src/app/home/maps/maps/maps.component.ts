import { Component, OnInit } from '@angular/core';
import { MapDirectionsService } from '@angular/google-maps';
import { map, Observable } from 'rxjs';
import { MapsService } from '../maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  dataLoaded: boolean = false;
  center: google.maps.LatLngLiteral = { lat: 8.530716970838743, lng: 77.390625 }; ;
  zoom = 15;
  
  circleOptions: google.maps.CircleOptions = { fillColor: "#00DE93", strokeColor: "#00DE93", strokeOpacity: 0 }
  markerPositions: google.maps.LatLngLiteral[] = [];
  markerOptions: google.maps.MarkerOptions = { draggable: false, icon: '../../../../assets/img/pin.png' };
  currentLocMarkerPosition: google.maps.LatLngLiteral;
  currentLocMarkerOptions: google.maps.MarkerOptions = { draggable: false, icon: '../../../../assets/img/current_location.png' };
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    center: this.center,
    maxZoom: 15,
    minZoom: 8,
    
  };
  radius = 5000;
  scrapLocations: any[] = [];

  constructor(private mapsService: MapsService) {
  }

  async ngOnInit() {
    await this.getCurrentLocation();
    let datas: any[] = await this.mapsService.scrapLocation(this.center.lat, this.center.lng, "asjdbs").toPromise();
    datas.forEach((data: any) => {
      if (!!data && !!data.displayLocation && !!data.displayLocation.coordinates && data.displayLocation.coordinates.length == 2)
        this.markerPositions.push({ "lat": data.displayLocation.coordinates[0], "lng": data.displayLocation.coordinates[1] })
    });
    this.currentLocMarkerPosition = { "lat": this.center.lat, "lng": this.center.lng };
    this.dataLoaded = true;
  }

  getCurrentLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            if (position) {
              this.center.lat = position.coords.latitude;
              this.center.lng = position.coords.longitude;
              resolve(location);
            }
          },
          (error) => console.log(error)
        );
      } else {
        reject('Geolocation is not supported by this browser.');
      }
    });
  }
}
