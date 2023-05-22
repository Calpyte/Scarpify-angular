import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from "jwt-decode";
import { UserService } from '../user-service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { ToastrService } from '../toastr/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
    autofocus: true,
    classList: {
      inputBox: 'my-super-box-class',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class',
    },
  };
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
    private toastrService: ToastrService,
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
      otp: e.join('')
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
        };
        this.toastrService.showSuccess("Login success");
        this.close(true);
      },
      error: (err) => {
        this.cookieService.deleteAll();
        this.userService.updateData(null);
        this.toastrService.showError("Login failed");
        this.close(false);
      }
    });
  }

}
