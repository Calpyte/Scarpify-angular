import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  values:any = {};

  constructor() {
    this.initializeValues();
   }

  initializeValues() {
    this.values = {
      qty : 0,
      price : 0
    };
  }

  ngOnInit() {
  }

}
