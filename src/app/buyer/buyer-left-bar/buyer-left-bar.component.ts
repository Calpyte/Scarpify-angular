import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ApiConfigService } from 'src/app/common/api-config';
import { RouteDetailComponent } from '../route-detail/route-detail.component';



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
    this.getProducts();
  }

  handleRoutes(index) {
    this.selectedRoute = index;
    this.selected.emit(this.routeList[index]);
    this.openDetail({ routeData: this.routeList[index], formData: this.form });
  }

  search = () => {
    this.selectedRoute = null;
    let data = {
      distance: this.form.selectedDistance,
      product: this.form.selectedProduct?.id,
      quantity: this.form.selectedQuantity
    }
    this.filter.emit(data);
    this.isEdit = false;
  }

  edit = () => {
    this.isEdit = true;
  }

  openDetail = (data) => {
    this.dialog.open(RouteDetailComponent, {
      width: '25%',
      minHeight: '92vh',
      maxHeight: '92vh',
      data: data,
      position: { top: '8vh', left: '0' },
      hasBackdrop: false
    }).afterClosed().subscribe((res) => {
      if (res && res === 'edit') {
        this.isEdit = true;
      }
      console.log(res)
    })
  }
}
