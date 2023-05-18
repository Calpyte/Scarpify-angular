import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfigService } from 'src/app/common/api-config';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient, private apiConfigService: ApiConfigService) { }

  getInventory = () => {
    return this.http.get(this.apiConfigService.getInventories);
  }

  updateInventory = (updatedData) => {
    return this.http.post(this.apiConfigService.saveInventory, updatedData);
  }

}
