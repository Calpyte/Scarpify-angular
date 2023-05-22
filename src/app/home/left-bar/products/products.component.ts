import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, tap } from 'rxjs';
import { ApiConfigService } from 'src/app/common/api-config';
import { HttpsApiService } from 'src/app/https-api.service';
import { ProductDetailsComponent } from 'src/app/transaction/product-details/product-details.component';
import { QuantityDetailsComponent } from 'src/app/transaction/quantity-details/quantity-details.component';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpsApiService, private apiConfig: ApiConfigService, public dialog: MatDialog) { }
  categories: any = [];
  filterCategories: any = [];

  ngOnInit() {
    this.getProducts();
    this.categories = [
      {
        id: 0,
        name: 'Bottles'
      },
      {
        id: 0,
        name: 'Metals'
      },
      {
        id: 0,
        name: 'Glasses'
      },
      {
        id: 0,
        name: 'Cardboard'
      },
      {
        id: 0,
        name: 'Plastic'
      },
      {
        id: 0,
        name: 'Domestic waste'
      },
      {
        id: 0,
        name: 'Plastic cover'
      },
      {
        id: 0,
        name: 'Electronic waste'
      },
      {
        id: 0,
        name: 'Dry waste'
      },
      {
        id: 0,
        name: 'Medical waste'
      }
    ];
    this.filterCategories = this.categories.slice(0, 8);
  }

  getProducts = () => {
    this.http.getArray(this.apiConfig.getProducts).subscribe((data) => {

    });
  }

  openDialog(user): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(user.toLowerCase() === 'bottles' ? QuantityDetailsComponent : ProductDetailsComponent, {
      data: user,
      hasBackdrop: true,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {


      }
    });
  }
  viewMore() {
    this.filterCategories = this.filterCategories.length === 8 ? this.categories : this.categories.slice(0, 8);
  }


  openDetail = (user) => {
    this.openDialog(user);
  }

}
