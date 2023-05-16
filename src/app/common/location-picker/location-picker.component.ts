import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.css']
})
export class LocationPickerComponent implements OnInit {
  @Input() inputLocation: any;
  @Input() style: string = "height:250px";
  @Output() selectedLocation: EventEmitter<any> = new EventEmitter();
  location: any = {};
  constructor() { }
  ngOnInit() {
    if (this.inputLocation) {
      this.location = this.inputLocation;
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        },
        (error) => {
          this.location = {
            lat: 13.0827,
            lng: 80.2707
          };
          console.log(error);
          alert('Location is not enabled and default location is chennai');
        }
      );
    }
  }
  markerDragEnd = (event) => {
    this.location = {
      lat: event?.coords?.lat,
      lng: event?.coords?.lng
    }
    this.selectedLocation.emit(this.location);
  }

}
