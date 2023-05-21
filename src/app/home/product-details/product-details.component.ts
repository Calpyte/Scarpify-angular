import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog/public-api';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  isViewDetail: boolean = false;
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

  toggleMoreDetails = () => {
    this.isViewDetail = !this.isViewDetail;
  }


}
