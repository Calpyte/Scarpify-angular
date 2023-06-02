import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {

  @Input() inventories: any = [];

  @Input() address:any = "Chennai";

  constructor() { }

  ngOnInit() {
  }

}
