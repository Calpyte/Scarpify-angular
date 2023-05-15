import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any) { }

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
  close = () => {
    this.dialogRef.close(null);
  }

  submit = () => {
    this.dialogRef.close(this.loginForm.value);
  }

  toRegister = () => {
    this.dialogRef.close(null);
  }

}
