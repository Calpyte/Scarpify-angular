import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TransactionPendingSteps } from '../common/common.enum';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  public transactionStepsEnum = TransactionPendingSteps;
  transactionStep: any = "";
  transactionData: any = {};
  constructor(@Inject(MAT_DIALOG_DATA) public data: any[], private transactionService: TransactionService) {
    this.transactionStep = this.transactionStepsEnum.productDetails;
  }

  ngOnInit() {
  }
  onProductDetailsResult(event) {
    if (event == "yes") {
      this.transactionStep = this.transactionStepsEnum.quantity;
    }
    else if (event == "no") {
      this.transactionStep = this.transactionStepsEnum.reason;
    }
    else {
      this.transactionStep = this.transactionStepsEnum.postpond;
    }
  }
  onQuantityDetailsResult(event) {
    if (!!event) {
      this.transactionData["amount"] = event.totalAmount;
      if (event.actionClick == "prev") {
        this.transactionStep = this.transactionStepsEnum.productDetails;
      }
      else {
        this.transactionStep = this.transactionStepsEnum.paymentOption;
      }
    }
  }
  paymentSelect(event) {
    this.transactionData["transactionType"] = event;
    if (event == 'goldCredit') {
      this.transactionStep = this.transactionStepsEnum.goldCredit;
    } else {
      this.transactionStep = this.transactionStepsEnum.rating;
    }
    
  }
  async onRatingResult(event) {
    if (!!event) {
      this.transactionData["star"] = event.rating;
      this.transactionData["review"] = event.review;
      if (event.actionSelected == "prev") {
        this.transactionStep = this.transactionStepsEnum.paymentOption;
      }
      else {
        await this.saveTransaction();
      }
    }
  }
  async saveTransaction() {
    this.transactionData["id"] = this.data[0].id;
    this.transactionData["deals"] = this.data[0].consumer.proposals
    await this.transactionService.saveTransaction(this.transactionData).toPromise();
  }
  async onReasonClick(event) {
    if (!!event) {
      if (event.actionClick == "cancel") {
        this.transactionStep = this.transactionStepsEnum.productDetails;
      }
      else {
        this.transactionData["rejectReason"] = event.reasons;
        await this.saveTransaction();
      }
    }
  }

}
