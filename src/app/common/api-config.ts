import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  baseUrl: string = environment.baseUrl;

  createUser: string = 'user/scrap/save';

  getAllCategories = 'product/category';

  getInventories = "order/scrap/seller";

  saveInventory = "order/scrap";

  getSellerBids = 'order/bid/seller/bids';

  placeBid = "order/bid/create"

  acceptBid = (id) => {
    return `order/bid/${id}/accept`;
  };

  rejectBid = (id) => {
    return `order/bid/${id}/reject`;
  };

  modifyBid = (id) => {
    return `order/bid/${id}/seller/modify`;
  };

  getNearBySellers = (lat, lng) => {
    return `order/scrap/location/lat/${lat}/lon/${lng}`
  }



}
