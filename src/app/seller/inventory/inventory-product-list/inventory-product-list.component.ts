import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inventory-product-list',
  templateUrl: './inventory-product-list.component.html',
  styleUrls: ['./inventory-product-list.component.css']
})
export class InventoryProductListComponent implements OnInit {
  @Input() stock: any = null;
  @Input() updatedStocks: any[] = [];

  inventoryForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.getForm();
    if (this.stock) {
      this.setFormValue();
    }
  }

  setFormValue() {
    this.inventoryForm.patchValue({
      quantity: this.stock?.quantity,
      marketPrice: this.stock?.price,
      price: this.stock?.price,
    })
  }

  getForm() {
    this.inventoryForm = this.fb.group({
      quantity: [0, [Validators.required]],
      marketPrice: [''],
      price: [0, [Validators.required]]
    })
  }

  submit = () => {
    let result = this.stock;
    result['quantity'] = this.inventoryForm.value.quantity;
    result['price'] = this.inventoryForm.value.price;
    this.updatedStocks.push(result);
  }

}
