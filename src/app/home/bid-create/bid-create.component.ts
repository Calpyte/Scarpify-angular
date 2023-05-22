import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { catchError, throwError } from 'rxjs';
import { ApiConfigService } from 'src/app/common/api-config';
import { ToastrService } from 'src/app/common/toastr/toastr.service';
@Component({
  selector: 'app-bid-create',
  templateUrl: './bid-create.component.html',
  styleUrls: ['./bid-create.component.css']
})
export class BidCreateComponent implements OnInit {
  step: number = 0;
  result: any = {};

  constructor(private toastrService: ToastrService, private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient, private apiConfig: ApiConfigService) { }

  ngOnInit() {
  }

  close = (res) => {
    this.dialogRef.close(res);
  }

  reviewBid = (event) => {

    this.result['bids'] = event;
    this.step++;
  }

  submit = (event) => {
    let proposals = this.result?.bids.map((data) => {
      return {
        "product": data?.product,
        "qty": data?.qty,
        "amount": data?.amount
      }
    });
    this.result['location'] = event;

    let data = {
      "consumer": {
        "id": this.data?.seller?.id,
        "firstName": this.data?.seller?.firstName,
        "lastName": this.data?.seller?.lastName,
        "image": this.data?.seller?.image,
        "proposals": proposals,
        "pickupDate": this.result?.location?.pickUpDate,
        "pickupTime": this.result?.location?.pickUpTime,
        "pickupDateTime": null,
        "communication": null
      }
    }
    this.http.post(this.apiConfig.placeBid, data).pipe(catchError((err) => { this.close(false); return throwError(() => err); })).subscribe((res) => {
      this.close(true);
    })

  }

}
