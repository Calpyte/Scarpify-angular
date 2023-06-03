import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../../environments/environment.prod';
import { ApiConfigService } from '../common/api-config';
import { HttpsApiService } from '../https-api.service';
import { TransactionComponent } from './transaction.component';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpsApiService: HttpsApiService, private apiConfigService: ApiConfigService, public dialog: MatDialog) { }
  getTransactionPending() {
    return this.httpsApiService.getArray(this.apiConfigService.getTransactionPending);
  }
  openTransactionModal(data: any[]) {
    const dialogRef = this.dialog.open(TransactionComponent, {
      width: '492px',
      minHeight: '400px',
      maxHeight:'600px',
      disableClose: true,
      data: data
    });
    dialogRef.afterClosed().subscribe((res) => {

    });
  }
  saveTransaction(data: any) {
    return this.httpsApiService.post(data, this.apiConfigService.saveTransaction(data["id"]));
  }
}
