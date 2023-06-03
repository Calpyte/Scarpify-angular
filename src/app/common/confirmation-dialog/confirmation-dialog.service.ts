import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  constructor(private dialog: MatDialog) { }

  openModal = (data) => {
    return this.dialog.open(ConfirmationDialogComponent, {
      minWidth: '400px',
      data: data,
      disableClose: true,
      position: { top: '2px' }
    });
  }

}
