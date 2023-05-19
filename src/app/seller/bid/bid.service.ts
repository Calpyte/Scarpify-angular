import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfigService } from 'src/app/common/api-config';

@Injectable({
  providedIn: 'root'
})
export class BidService {

  constructor(private http: HttpClient, private apiConfigService: ApiConfigService) { }


  getMyBids = () => {
    return this.http.get(this.apiConfigService.getSellerBids);
  }

  acceptBid = (id) => {
    return this.http.put(this.apiConfigService.acceptBid(id), {});
  }

  rejectBid = (id) => {
    return this.http.put(this.apiConfigService.rejectBid(id), {});
  }

  modifyBid = (id, data) => {
    return this.http.put(this.apiConfigService.modifyBid(id), data);
  }

}
