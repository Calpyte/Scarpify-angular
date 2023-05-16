import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  isAuthenticated: boolean = false;

  setIsAuthenticated(auth: boolean) {
    this.isAuthenticated = auth;
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  constructor(public dialog: MatDialog) { }

  openRegister = () => {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '492px',
      data: null,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res === 'login') {
        this.openLogin();
      } else if (res === true) {
        this.setIsAuthenticated(true)
      } else if (res === false) {
        this.setIsAuthenticated(false)
      } else this.setIsAuthenticated(false);
    });
  }

  openLogin = () => {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '492px',
      data: null,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res === 'register') {
        this.openRegister();
      } else if (res === true) {
        this.setIsAuthenticated(true)
      } else if (res === false) {
        this.setIsAuthenticated(false)
      } else this.setIsAuthenticated(false);
    })
  }
}
