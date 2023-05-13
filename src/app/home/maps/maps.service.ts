import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpsApiService } from '../../https-api.service';
import * as AppUrls from './../../app.configuration'

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private httpsApiService: HttpsApiService) { }
  scrapLocation(lat: any, lng: any, product: any = null) {
    return this.httpsApiService.getArray(environment.baseUrl + AppUrls.AppUrls.scrapLocation + "/lat/" + lat + "/lon/" + lng + "?product=" + product)
  }
}
