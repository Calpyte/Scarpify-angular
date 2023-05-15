import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  step: number = 0;
  users: any = [
    {
      id: 'seller',
      name: 'Seller',
      icon: 'person'
    },
    {
      id: 'buyer',
      name: 'Buyer',
      icon: 'store'
    }
  ];

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      userType: ['seller'],
      firstName: ['', [Validators.required]],
      lastName: [''],
      businessType: [''],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[1-9]{1}[0-9]{9}$')]],
      otp: [''],
      address: [''],
      location: [''],
      products: [''],
    })
  }

  close = () => {
    this.dialogRef.close(null);
  }

  handleUserType = (userType: string) => {
    this.registerForm.patchValue({
      userType: userType
    });
  }

  handleForward = () => {
    this.step = this.step + 1;
  }

  handleBackward = () => {
    this.step = this.step - 1;
  }

}
