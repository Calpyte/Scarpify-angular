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
  }

  getProducts = () => {
    this.http.getArray(this.apiConfig.getAllCategories).subscribe((data) => {
      this.categories = data;
      this.filterCategories = this.categories.slice(0, 8);
    });
  }

  openDialog(user): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(user.toLowerCase() === 'paper' ? QuantityDetailsComponent : ProductDetailsComponent, {
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
