import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})


export class DateComponent implements OnInit {

  selected : Date | null;
  constructor() { }

  ngOnInit() {

   }
}


