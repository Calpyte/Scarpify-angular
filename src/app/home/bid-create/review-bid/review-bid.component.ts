import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-review-bid',
  templateUrl: './review-bid.component.html',
  styleUrls: ['./review-bid.component.css']
})
export class ReviewBidComponent implements OnInit {
  @Output() backToBid: EventEmitter<any> = new EventEmitter();
  @Output() result: EventEmitter<any> = new EventEmitter();
  @Input() bidData: any = null;

  reviewForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      pickUpDate: [''],
      pickUpTime: ['']
    })
  }

  ngOnInit() {
  }

  get totalAmount() {
    let amount = 0;
    this.bidData.bids?.forEach((e) => {
      amount = amount + (e?.qty * e?.amount)
    })
    return amount;
  }



  back() {
    this.backToBid.emit(true);
  }

  submit() {
    this.result.emit(this.reviewForm.value);
  }

}
