import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiConfig {
  baseUrl: string = environment.baseUrl;

  getAllCategories = 'product/category';

}
