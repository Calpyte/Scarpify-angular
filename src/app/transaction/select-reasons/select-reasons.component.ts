import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-select-reasons',
  templateUrl: './select-reasons.component.html',
  styleUrls: ['./select-reasons.component.css']
})
export class SelectReasonsComponent implements OnInit {
  @Output() onNextClick: EventEmitter<any> = new EventEmitter();
  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data2: any) { }
  reasons: any[] = [];

  ngOnInit() {
    this.prepareReasons();
  }
  prepareReasons() {
    this.reasons = [
      {
        "reason": "Buyer didn’t respond",
        "selected":false
      },
      {
        "reason": "Asking for lower price than quoted",
        "selected": false
      },
      {
        "reason": "I'm not available at the moment",
        "selected": false
      },
      {
        "reason": "Could not reach the buyer on phone",
        "selected": false
      },
      {
        "reason": "Others",
        "selected": false
      }
    ]
  }
  actionClick(event) {
    let selectedReason = [];
    if (event == "submit") {
      for (let i = 0; i < this.reasons.length; i++) {
        if (this.reasons[i].selected) {
          selectedReason.push(this.reasons[i].reason);
        }
      }
    }
    let data = { "actionClick": event, "reasons": selectedReason };
    this.onNextClick.emit(data);
  }
}
