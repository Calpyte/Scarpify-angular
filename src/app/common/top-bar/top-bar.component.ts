import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input() selectedOption: string = "seller";
  constructor() { }

  ngOnInit(): void {
  }
  onOptionSelected(isSeller: boolean) {
    if (isSeller) {
      this.selectedOption = "seller";
    } else {
      this.selectedOption = "buyer";
    }
  }
}
