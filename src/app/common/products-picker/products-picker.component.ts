import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-products-picker',
  templateUrl: './products-picker.component.html',
  styleUrls: ['./products-picker.component.css']
})
export class ProductsPickerComponent implements OnInit {
  @Input() selectedCheckboxIds: string[] = [];
  @Input() categories: any = [];

  filterCategories: any = [];

  constructor() { }

  ngOnInit() {
    this.filterCategories = this.categories;
  }

  checkboxChanged(event: MatCheckboxChange): void {
    const checkboxId = event.source.value;
    if (event.checked) {
      this.selectedCheckboxIds.push(checkboxId);
    } else {
      const index = this.selectedCheckboxIds.indexOf(checkboxId);
      if (index > -1) {
        this.selectedCheckboxIds.splice(index, 1);
      }
    }
  }

  onSearch = (event) => {
    this.filterCategories = this.categories.filter((category) => category?.name.toLowerCase().includes(event.target.value.toLowerCase()));
  }

}
