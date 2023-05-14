import { Component, OnInit } from '@angular/core';
import { MapsService } from '../maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  dataLoaded: boolean = false;
  center: google.maps.LatLngLiteral = { lat: 8.530716970838743, lng: 77.390625 }; ;
  zoom = 10;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  circleOptions: google.maps.CircleOptions = { fillColor: "#00DE93", strokeColor: "#00DE93", strokeOpacity: 0 }
  markerPositions: google.maps.LatLngLiteral[] = [];
  radius = 10000;
  scrapLocations: any[] = [];
  addMarker(event: google.maps.MapMouseEvent) {
    if (event != null && event.latLng != null) {
      this.markerPositions.push(event.latLng.toJSON());
    }
  }

  constructor(private mapsService: MapsService) { }

  async ngOnInit() {
    await this.getCurrentLocation();
    let datas: any[] = await this.mapsService.scrapLocation(this.center.lat, this.center.lng, "asjdbs").toPromise();
    datas.forEach((data: any) => {
      if (!!data && !!data.displayLocation && !!data.displayLocation.coordinates && data.displayLocation.coordinates.length == 2)
        this.markerPositions.push({ "lat": data.displayLocation.coordinates[0], "lng": data.displayLocation.coordinates[1] })
    });
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
