import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { trigger, state, style, animate, transition } from '@angular/animations';


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
    @Inject(MAT_DIALOG_DATA) public data: any) { }

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

  }

}
