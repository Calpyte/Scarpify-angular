import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  baseUrl: string = environment.baseUrl;

  getAllCategories = 'product/category';

  getInventories = "order/scrap/seller";

  saveInventory = "order/scrap";

  getSellerBids = 'order/bid/seller/bids';

  acceptBid = (id) => {
    return `order/bid/${id}/accept`;
  };

  rejectBid = (id) => {
    return `order/bid/${id}/reject`;
  };

  modifyBid = (id) => {
    return `order/bid/${id}/seller/modify`;
  };


}
