import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bid-detail',
  templateUrl: './bid-detail.component.html',
  styleUrls: ['./bid-detail.component.css']
})
export class BidDetailComponent implements OnInit {

  @Input() bid: any = {};
  @Output() handleAction: EventEmitter<any> = new EventEmitter();
  @Input() selectedTab: any;

  constructor() { }

  ngOnInit() {

  }

  bidAction = (bid, action) => {
    this.handleAction.emit({ bid, action })
  }

}
