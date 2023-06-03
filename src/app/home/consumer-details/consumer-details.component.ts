import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/common/user-service/user.service';

@Component({
  selector: 'app-consumer-details',
  templateUrl: './consumer-details.component.html',
  styleUrls: ['./consumer-details.component.css']
})
export class ConsumerDetailsComponent implements OnInit {

  isViewDetail: boolean = false;
  @Output() placeBid: EventEmitter<any> = new EventEmitter();
  @Input() data: any;

  popupCoordinates: { left: string, top: string } = { left: '0', top: '0' };

  userData: any = null;


  constructor(private userService: UserService) {
    this.userService.getData().subscribe((data) => {
      if (data) {
        this.userData = data;
      } else {
        this.userData = null;
      }
    });
  }

  ngOnInit() {

  }

  toggleMoreDetails = () => {
    //this.location.reload();
    this.isViewDetail = !this.isViewDetail;
  }

  handleBid = () => {
    if (this.userData && this.userData?.role === 'buyer') {
      this.placeBid.emit(this.data);
    } else {
      alert("Login as a buyer to place bid");
    }
  }

}
