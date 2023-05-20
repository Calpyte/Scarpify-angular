import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-review-bid',
  templateUrl: './review-bid.component.html',
  styleUrls: ['./review-bid.component.css']
})
export class ReviewBidComponent implements OnInit {

  @Output() backToBid: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  back() {
    this.backToBid.emit(true);
  }

}
