import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BidByRoutesComponent } from '../route-location/bid-by-routes/bid-by-routes.component';


@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.css'],
  animations: [
    trigger('dialogAnimation', [
      state('void', style({ transform: 'translateX(-100%)', opacity: 0 })),
      transition(':enter', animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))),
      transition(':leave', animate('300ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))),
    ])
  ]
})
export class RouteDetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) { }

  selectedSellers: any = {}

  ngOnInit() {
  }

  get formData() {
    return this.data?.formData;
  }
  get routeData() {
    return this.data?.routeData;
  }

  back = () => {
    this.dialogRef.close();
  }
  edit = () => {
    this.dialogRef.close('edit');
  }



  placeBid = () => {
    let selectedSellers = this.data?.routeData.data.filter(e => e?.isSelected === true);
    let bidData = { routeData: this.data?.routeData, formData: this.data?.formData }
    bidData.routeData['data'] = [...selectedSellers];
    this.dialog.open(BidByRoutesComponent, {
      width: '75%',
      data: bidData,
      hasBackdrop: true,
    }).afterClosed().subscribe((res) => {

    })
  }
}
