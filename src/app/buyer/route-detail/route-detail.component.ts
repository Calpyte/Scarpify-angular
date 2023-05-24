import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.css']
})
export class RouteDetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }
  sellers: any = [
    1, 2, 3, 4, 5
  ]
  ngOnInit() {
    console.log(this.data?.routeData);
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

  }
  placeBid = () => {

  }

}
