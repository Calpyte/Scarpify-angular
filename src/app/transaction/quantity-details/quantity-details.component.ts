import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-details',
  templateUrl: './quantity-details.component.html',
  styleUrls: ['./quantity-details.component.css']
})
export class QuantityDetailsComponent implements OnInit {
  isViewDetail: boolean = false;
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

  toggleMoreDetails = () => {
    this.isViewDetail = !this.isViewDetail;
  }

}
