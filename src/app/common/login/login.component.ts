import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      phone: '',
      otp: ''
    })
  }

  getOTP() {
    alert(this.phoneNumber);
  }

  handleUserType = (type) => {
    this.userType = type;
  }

}
