import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(public dialog: MatDialog) { }

  openRegister = () => {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '492px',
      data: null,
      disableClose: true
    });
    return dialogRef.afterClosed();
  }

  openLogin = () => {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '492px',
      data: null,
      disableClose: true
    });
    return dialogRef.afterClosed();
  }

}
