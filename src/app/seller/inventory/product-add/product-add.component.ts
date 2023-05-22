import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiConfigService } from 'src/app/common/api-config';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  categories: any[] = [];
  selectedCheckboxIds: any[] = [];
  step: number = 0;
  selectedProducts: any[] = []

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private apiConfigService: ApiConfigService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts = () => {
    this.http.get(this.apiConfigService.getAllCategories).subscribe((res: any) => {
      this.categories = res.map((e) => { e.products = e.products?.filter((product) => !this.data?.selectedCheckboxIds.includes(product?.id)); return e; })
    });
  }

  getSelected = () => {
    alert(JSON.stringify(this.selectedCheckboxIds));
  }
  close = (data) => {
    this.dialogRef.close(data);
  }

  getSelectedProducts = () => {
    let arr = [];
    this.categories.forEach((category) => {
      let products = [...category?.products];
      let obj = {
        id: category?.id,
        name: category?.name,
        icon: category?.icon,
        products: products.filter((product) => this.selectedCheckboxIds.includes(product?.id))
      };
      arr.push(obj);
    });
    this.selectedProducts = arr.filter((e) => e?.products?.length > 0);

  }

  backward = () => {
    this.step--;
  }

  stepAction = () => {
    if (this.step === 0) {
      this.getSelectedProducts();
      this.step++;
    } else if (this.step === 1) {
      if (this.selectedCheckboxIds?.length > 0) {
        this.dialogRef.close(this.selectedProducts);
      } else {
        this.dialogRef.close(null);
      }
    }
  }

}
