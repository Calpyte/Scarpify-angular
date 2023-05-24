import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfigService } from '../common/api-config';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(private http: HttpClient, private apiConfigService: ApiConfigService) {

  }

  getRoutesByFilter = (data: RoutesByFilter) => {
    return this.http.get(this.apiConfigService.getRoutes(data));
  }

}


export interface RoutesByFilter {
  distance: number;
  lat: number;
  lng: number;
  product: string;
  quantity: number;
}
