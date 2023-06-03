import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {
  private messageSource = new BehaviorSubject(false);
  currentMessage = this.messageSource.asObservable();
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
        return res;
      } else {
        return res;
        this.router.navigate(["/"])
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
        this.messageSource.next(true);
        //this.router.navigate([route])
      } else {
        this.messageSource.next(false);
        this.router.navigate(["/"])
      }
    })
  }
}
