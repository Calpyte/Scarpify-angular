import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {

  @Input() categories: any[] = [];
  @Input() selectedIds: any[] = [];
  selectedProducts = [];

  constructor() { }

  ngOnInit() {
    this.getSelectedProducts();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['selectedIds']) {
  //     this.getSelectedProducts();
  //   }
  // }

  getSelectedProducts = () => {
    let arr = [];
    this.categories.forEach((category) => {
      let products = [...category?.products];
      let obj = {
        id: category?.id,
        name: category?.name,
        icon: category?.icon,
        products: products.filter((product) => this.selectedIds.includes(product?.id))
      };
      arr.push(obj);
    });
    this.selectedProducts = arr.filter((e) => e?.products?.length > 0);
  }

}
