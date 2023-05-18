import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bid-detail',
  templateUrl: './bid-detail.component.html',
  styleUrls: ['./bid-detail.component.css']
})
export class BidDetailComponent implements OnInit {

  @Input() bid: any = {};
  @Output() handleAction: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.bid = {
      "id": "645e4da388addc22094af501",
      "buyer": {
        "id": "645cd8200eee6113235486e2",
        "firstName": "Garabage Collectors",
        "lastName": "Garabage Collectors",
        "image": ""
      },
      "consumer": {
        "id": "645cd5bd0eee6113235486e0",
        "firstName": "Vignesh V",
        "lastName": null,
        "image": "875-passport_size_photo.jpeg",
        "proposals": [
          {
            "product": {
              "id": "0919d4cc-efe9-11ed-a05b-0242ac120003",
              "name": "Kraft paper",
              "image": null
            },
            "qty": 10,
            "amount": 11
          },
          {
            "product": {
              "id": "5da3d27c-efe9-11ed-a05b-0242ac120003",
              "name": "Newspapers",
              "image": null
            },
            "qty": 50,
            "amount": 11
          }
        ],
        "pickupDate": "Sunday 23 2023",
        "pickupTime": '9 AM',
        "pickupDateTime": null,
        "communication": null
      },
      "status": "OPEN"
    };
  }

  bidAction = (bid, action) => {
    this.handleAction.emit({ bid, action })
  }

}
