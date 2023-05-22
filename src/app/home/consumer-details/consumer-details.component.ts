import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-consumer-details',
  templateUrl: './consumer-details.component.html',
  styleUrls: ['./consumer-details.component.css']
})
export class ConsumerDetailsComponent implements OnInit {

  isViewDetail: boolean = false;
  @Output() placeBid: EventEmitter<any> = new EventEmitter();
  @Input() data: any;


  constructor() { }

  ngOnInit() {
    console.table(this.data);
  }

  toggleMoreDetails = () => {
    this.isViewDetail = !this.isViewDetail;
  }

}
