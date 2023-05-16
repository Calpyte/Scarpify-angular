import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { catchError } from 'rxjs';
import { IndexedDBService } from 'src/app/service/IndexedDB.service';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { LoginService } from 'src/app/service/login.service';
import { VerificationService } from '../verification.service';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from "jwt-decode";
import { UserService } from '../user-service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userType: string = 'seller';
  phoneNumber: number = null;
  otp: number = null;
  step: number = 0;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthServiceService,
    private cookieService: CookieService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern('^[1-9]{1}[0-9]{9}$')]],
      otp: ['', Validators.required]
    })
  }

  getOTP() {
    if (this.loginForm.controls['phone'].valid) {
      this.step = 1;
    }
  }

  onOtpChange(e: any) {
    this.loginForm.patchValue({
      otp: e
    })
  }

  handleUserType = (type) => {
    this.loginForm.reset();
    this.step = 0;
    this.userType = type;
  }
  close = (data) => {
    this.dialogRef.close(data);
  }

  submit = () => {
    this.authService.login(this.loginForm.value?.phone, this.loginForm.value?.otp).subscribe({
      next: (res) => {
        this.cookieService.set("refreshToken", res.token)
        this.cookieService.set("token", res.auth);
        const token = this.cookieService.get("token");
        if (token) {
          const decoded = jwt_decode(token);
          this.userService.updateData({
            userName: decoded['given_name'],
            email: decoded['email']
          })
        }
        this.close(true);
      },
      error: (err) => {
        this.cookieService.deleteAll();
        this.userService.updateData(null);
        this.close(false);
      }
    });
  }
}
