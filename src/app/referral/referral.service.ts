import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfigService } from '../common/api-config';
@Injectable({
  providedIn: 'root'
})
export class ReferralService {

  constructor(private http: HttpClient, private apiConfigService: ApiConfigService) {


  }
  getProducts() {
    return fetch('../../assets/products.json').then(res => res.json());
  }

  addContactUs = (data) => {
    return this.http.post(this.apiConfigService.saveContactUs, data);
  }


}
