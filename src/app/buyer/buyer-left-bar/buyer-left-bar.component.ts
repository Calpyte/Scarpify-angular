import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BidByCategoryComponent } from '../bid-by-category/bid-by-category.component';
import { HttpClient } from '@angular/common/http';
import { ApiConfigService } from 'src/app/common/api-config';


@Component({
  selector: 'app-buyer-left-bar',
  templateUrl: './buyer-left-bar.component.html',
  styleUrls: ['./buyer-left-bar.component.css'],
})
export class BuyerLeftBarComponent implements OnInit {

  constructor(public dialog: MatDialog, private http: HttpClient, private apiConfig: ApiConfigService) { }
  categories: any = [];
  form: any = {
    selectedCategory: '',
    selectedProduct: '',
    selectedQuantity: 0,
    selectedDistance: 10
  };
  @Output() filter: EventEmitter<any> = new EventEmitter();
  @Output() selected: EventEmitter<any> = new EventEmitter();
  @Input() routeList: any = [];
  selectedRoute: any = null;
  isEdit: boolean = true;

  getProducts() {
    this.http.get(this.apiConfig.getProducts).subscribe((data: any) => {
      this.categories = data?.content;
    });
  }

  ngOnInit(): void {
    this.getProducts()
  }

  handleRoutes(index) {
    this.selectedRoute = index;
    this.selected.emit(this.routeList[index])
  }

  search = () => {
    let data = {
      distance: this.form.selectedDistance,
      product: this.form.selectedProduct?.id,
      quantity: this.form.selectedQuantity
    }
    this.selectedRoute = null;
    this.filter.emit(data);
    this.isEdit = false;
  }

  edit = () => {
    this.isEdit = true;
  }
}
