import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog/public-api';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  isViewDetail: boolean = false;
  @Input() pendingItems: any[];
  @Output() onNextClick: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggleMoreDetails = () => {
    this.isViewDetail = !this.isViewDetail;
  }
  nextClick(event) {
    this.onNextClick.emit(event);
  }
}
