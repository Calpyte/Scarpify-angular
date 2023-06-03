import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  rating: any=0;
  ratingArr = [0, 1, 2, 3, 4];
  color: string = 'yellow';
  review: string = "";
  @Output() onNextClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  actionClick(event: any) {
    let data = {};
    data["rating"] = this.rating;
    data["actionSelected"] = event;
    data["review"] = this.review;
    this.onNextClick.emit(data);
  }
  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
  onClick(rating: number) {
    this.rating = rating;
  }
}
