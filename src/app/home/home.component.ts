import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr/toastr.service';
import { HttpClient } from '@angular/common/http';
import { ApiConfigService } from '../common/api-config';
import { TransactionService } from '../transaction/transaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  location: any = {
    lat: 13.0827,
    lng: 80.2707
  }

  inventories: any = [];

  address:any = "";


  constructor(private toastrService: ToastrService, private http: HttpClient, private apiConfig: ApiConfigService
              ) { }

  async ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.location.lat = position.coords.latitude;
        this.location.lng = position.coords.longitude;
        this.getNearBySellers(this.location.lat, this.location.lng);
        this.getCurrentLocation(this.location.lat, this.location.lng);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.getCurrentLocation(this.location.lat, this.location.lng);
      console.log('Geolocation is not supported by this browser.');
    }
  }

  getNearBySellers = (lat, lng) => {
    this.http.get(this.apiConfig.getNearBySellers(lat, lng)).subscribe((res) => {
      this.inventories = res;
    })
  }


  getCurrentLocation = (lat, lon) => {
    this.http.get(this.apiConfig.getCityAddress(lat, lon)).subscribe((res:any) => {
      this.address = res?.loc;
    })
  };


}
