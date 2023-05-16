import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(public dialog: MatDialog, private router: Router) { }

  openRegister = (route) => {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '492px',
      data: null,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res === 'login') {
        this.openLogin(route);
      } else if (res === true) {
        this.router.navigate([route])
      } else {
        this.router.navigate(["/home"])
      }
    });
  }

  openLogin = (route) => {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '492px',
      data: null,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res === 'register') {
        this.openRegister(route);
      } else if (res === true) {
        this.router.navigate([route])
      } else {
        this.router.navigate(["/home"])
      }
    })
  }
}
