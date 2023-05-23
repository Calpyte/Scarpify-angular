import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Type } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, tap } from 'rxjs';
import { ApiConfigService } from 'src/app/common/api-config';
import { HttpsApiService } from 'src/app/https-api.service';
import { ProductDetailsComponent } from 'src/app/transaction/product-details/product-details.component';
import { QuantityDetailsComponent } from 'src/app/transaction/quantity-details/quantity-details.component';
import { RatingComponent } from 'src/app/transaction/rating/rating.component';
import { SelectReasonsComponent } from 'src/app/transaction/select-reasons/select-reasons.component';
import { TypeTransactionComponent } from 'src/app/transaction/type-transaction/type-transaction.component';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpsApiService, private apiConfig: ApiConfigService, public dialog: MatDialog, private httpC: HttpClient) { }
  categories: any = [];
  filterCategories: any = [];

  ngOnInit() {
    this.getProducts();
  }

  getProducts = () => {
    this.httpC.get(this.apiConfig.getProducts).subscribe((data: any) => {
      this.categories = data?.content;
      this.filterCategories = this.categories.slice(0, 8);
    });
  }

  openDialog(user): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(user.toLowerCase() === 'paper' ? QuantityDetailsComponent : TypeTransactionComponent, {
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
