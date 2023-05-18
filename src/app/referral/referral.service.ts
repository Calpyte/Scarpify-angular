import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferralService {

  constructor(private http: HttpClient) {


  }
  getProducts() {
    return fetch('../../assets/products.json').then(res => res.json());
  }
}
