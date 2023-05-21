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
    this.categories = [
      {
        "id": "645cd55f1d18620f9c30810b",
        "name": "Paper",
        "icon": "paper.png",
        "products": [
          {
            "id": "0919d4cc-efe9-11ed-a05b-0242ac120003",
            "name": "Kraft paper",
            "icon": "kraft_paper.png",
            "isDeleted": false
          },
          {
            "id": "5da3d27c-efe9-11ed-a05b-0242ac120003",
            "name": "Newspapers",
            "icon": "newspapers.png",
            "isDeleted": false
          },
          {
            "id": "5da3d27c-efe9-11ed-a05b-0242ac120018",
            "name": "High-grade papers",
            "icon": "high-grade_papers.png",
            "isDeleted": false
          },
          {
            "id": "0919d4cc-efe9-11ed-a05b-0242ac120014",
            "name": "Mixed papers",
            "icon": "mixed_papers.png",
            "isDeleted": false
          },
          {
            "id": "0919d4cc-efe9-11ed-a05b-0242ac120015",
            "name": "waxed paper",
            "icon": "waxed_paper.png",
            "isDeleted": false
          },
          {
            "id": "0919d4cc-efe9-11ed-a05b-0242ac120016",
            "name": "shredded paper",
            "icon": "shredded_paper.png",
            "isDeleted": false
          },
          {
            "id": "0919d4cc-efe9-11ed-a05b-0242ac120017",
            "name": "wrapping gift paper",
            "icon": "wrapping_gift_paper.png",
            "isDeleted": false
          },
          {
            "id": "0919d4cc-efe9-11ed-a05b-0242ac120018",
            "name": "plastic-coated paper",
            "icon": "plastic-coated_paper.png",
            "isDeleted": false
          },
          {
            "id": "0919d4cc-efe9-11ed-a05b-0242ac120019",
            "name": "receipts",
            "icon": "receipts.png",
            "isDeleted": false
          },
          {
            "id": "0919d4cc-efe9-11ed-a05b-0242ac120020",
            "name": "sticky paper",
            "icon": "sticky_paper.png",
            "isDeleted": false
          },
          {
            "id": "0919d4cc-efe9-11ed-a05b-0242ac120021",
            "name": "milk",
            "icon": "milk.png",
            "isDeleted": false
          },
          {
            "id": "0919d4cc-efe9-11ed-a05b-0242ac120022",
            "name": "napkins",
            "icon": "napkins.png",
            "isDeleted": false
          },
          {
            "id": "0919d4cc-efe9-11ed-a05b-0242ac120023",
            "name": "paper towel",
            "icon": "paper_towel.png",
            "isDeleted": false
          },
          {
            "id": "0919d4cc-efe9-11ed-a05b-0242ac120024",
            "name": "toilet paper",
            "icon": "toilet_paper.png",
            "isDeleted": false
          }
        ],
        "isDeleted": false,
        "_class": "com.scrapify.product.domain.Category"
      }
    ]
    // this.http.get(this.apiConfigService.getAllCategories).subscribe((res: any) => {
    //   this.categories = res.map((e) => { e.products = e.products?.filter((product) => !this.data?.selectedCheckboxIds.includes(product?.id)); return e; })
    // });
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
