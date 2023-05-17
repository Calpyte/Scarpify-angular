import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { ApiConfig } from 'src/app/common/api-config';
import { HttpsApiService } from 'src/app/https-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpsApiService, private apiConfig: ApiConfig) { }
  categories: any = [];

  ngOnInit() {
    this.getProducts();
  }

  getProducts = () => {
    this.http.getArray(this.apiConfig.getAllCategories).subscribe((data) => {
      this.categories = data;
    });
  }



}
