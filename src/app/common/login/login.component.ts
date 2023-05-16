import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { catchError } from 'rxjs';
import { IndexedDBService } from 'src/app/service/IndexedDB.service';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { LoginService } from 'src/app/service/login.service';
import { VerificationService } from '../verification.service';

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
    private verificationService: VerificationService,
    private authService: AuthServiceService,
    private indexDBService: IndexedDBService) { }

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
        this.authService.setAccessToken(res.auth);
        this.indexDBService.setRefreshToken(res.token);
        this.verificationService.setIsAuthenticated(true);
        this.close(true);
      },
      error: (err) => { this.verificationService.setIsAuthenticated(false) }
    });
  }
}
