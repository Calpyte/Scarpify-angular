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

}
