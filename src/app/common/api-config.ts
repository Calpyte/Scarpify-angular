import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { RoutesByFilter } from "../buyer/buyer.service";

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

  getRoutes = (data: RoutesByFilter) => {
    return `order/scrap/route/d/${data.distance}/l/${data.lat}/ln/${data.lng}/p/${data.product}/q/${data.quantity}`;
  }
  // 'order/scrap/route/d/100/l/9.6064532/ln/77.9394303/p/0919d4cc-efe9-11ed-a05b-0242ac120003/q/32';
  //

}
