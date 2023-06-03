import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { RoutesByFilter } from "../buyer/buyer.service";

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  baseUrl: string = environment.baseUrl;
  orderBaseUrl: string = environment.ordersBaseUrl;
  createUser: string = this.baseUrl + 'user/scrap/save';

  getAllCategories = this.baseUrl + 'product/category';

  saveContactUs = this.baseUrl + 'product/contactUs/save';

  getProducts = this.baseUrl + 'product/category/pagination/page/0/size/30';

  getInventories = this.baseUrl + "order/scrap/seller";

  saveInventory = this.baseUrl + "order/scrap";

  getSellerBids = this.baseUrl + 'order/bid/seller/bids';

  placeBid = this.baseUrl + "order/bid/create";

  saveAddressToConsumer = this.baseUrl + "user/consumer/address";

  saveProductToConsumer = this.baseUrl + "user/consumer/product";

  //Transaction

  getTransactionPending = this.orderBaseUrl + 'order/transaction/pending';





  //Dynmaic Routes

  acceptBid = (id) => {
    return this.baseUrl +`order/bid/${id}/accept`;
  };

  saveTransaction(id) {
    return this.orderBaseUrl + `order/transaction/seller/${id}/save`;
  }

  rejectBid = (id) => {
    return this.baseUrl +`order/bid/${id}/reject`;
  };

  modifyBid = (id) => {
    return this.baseUrl +`order/bid/${id}/seller/modify`;
  };

  getNearBySellers = (lat, lng) => {
    return this.baseUrl +`order/scrap/location/lat/${lat}/lon/${lng}`
  }

  getCityAddress = (lat, lng) => {
    return this.baseUrl +`user/unsecure/loc/${lat}/${lng}`
  }


  getRoutes = (data: RoutesByFilter) => {
    return `order/scrap/route/d/${data.distance}/l/${data.lat}/ln/${data.lng}/p/${data.product}/q/${data.quantity}`;
  }

  // 'order/scrap/route/d/100/l/9.6064532/ln/77.9394303/p/0919d4cc-efe9-11ed-a05b-0242ac120003/q/32';
  //
}
