import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  baseUrl: string = environment.baseUrl;

  createUser: string = 'user/scrap/save';

  getAllCategories = 'product/category';

  saveContactUs = 'product/contactUs/save';

  getProducts = 'product/category/pagination/page/0/size/30';

  getInventories = "order/scrap/seller";

  saveInventory = "order/scrap";

  getSellerBids = 'order/bid/seller/bids';

  placeBid = "order/bid/create";

  saveAddressToConsumer = "user/consumer/address";

  saveProductToConsumer = "user/consumer/product";

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
