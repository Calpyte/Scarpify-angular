import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, tap } from 'rxjs';
import { ApiConfigService } from 'src/app/common/api-config';
import { HttpsApiService } from 'src/app/https-api.service';
import { PlaceBidComponent } from '../../place-bid/place-bid.component';
import { ProductDetailsComponent } from '../../product-details/product-details.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpsApiService, private apiConfig: ApiConfigService,public dialog: MatDialog) { }
  categories: any = [];

  ngOnInit() {
    this.getProducts();
    this.categories = [
      {
        id: 0,
        name: 'Bottlwa'
      },
      {
        id: 0,
        name: 'Bottlwa'
      },
      {
        id: 0,
        name: 'Bottlwa'
      },
      {
        id: 0,
        name: 'Bottlwa'
      },
      {
        id: 0,
        name: 'Bottlwa'
      },
      {
        id: 0,
        name: 'Bottlwa'
      },
      {
        id: 0,
        name: 'Bottlwa'
      },
      {
        id: 0,
        name: 'Bottlwa'
      },
      {
        id: 0,
        name: 'Bottlwa'
      },
      {
        id: 0,
        name: 'Bottlwa'
      }
    ]
  }

  getProducts = () => {
    this.http.getArray(this.apiConfig.getAllCategories).subscribe((data) => {
      this.categories = data;
    });
  }

  openDialog(user): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      data: user,
      hasBackdrop: true,
      disableClose:true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

  openDetail = (user) => {
    this.openDialog(user);
  }
}
