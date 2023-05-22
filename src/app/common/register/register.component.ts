import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { trigger, style, animate, transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { ApiConfigService } from '../api-config';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { catchError, of, throwError } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class RegisterComponent implements OnInit {
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
  registerForm: FormGroup;
  step: number = 0;
  selectedIds: any = [];
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

  categories: any = [];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private authService: AuthServiceService,
    private apiConfigService: ApiConfigService) { }

  ngOnInit() {
    this.getProducts();
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

  getProducts = () => {
    this.http.get(this.apiConfigService.getAllCategories).subscribe((res: any) => {
      this.categories = res.map((e) => { e.products = e.products?.filter((product) => !this.data?.selectedCheckboxIds.includes(product?.id)); return e; })
    });
  }

  selectedLocation = (event) => {
    this.registerForm.patchValue({
      location: event
    })
  }

  getSelectedProducts = () => {
    let arr = [];
    this.categories.forEach((category) => {
      let products = [...category?.products];
      let obj = {
        id: category?.id,
        name: category?.name,
        icon: category?.icon,
        products: products.filter((product) => this.selectedIds.includes(product?.id))
      };
      arr.push(obj);
    });
    this.registerForm.patchValue({
      products: arr.filter((e) => e?.products?.length > 0)
    })
  }

  handleUserType = (userType: string) => {
    this.registerForm.patchValue({
      userType: userType
    });
  }

  loginUser = (userName, password) => {
    this.authService.login(userName, password).subscribe({
      next: (res) => { this.step++; },
      error: (err) => { alert(err?.message) }
    });
  }

  createUser = (user) => {
    const formData = new FormData();
    formData.append('file', null);
    formData.append('request', JSON.stringify(user));
    this.http.post(this.apiConfigService.createUser, formData).pipe(catchError(err => { alert(err?.message); return throwError(() => err) })).subscribe((res) => {
      this.loginUser(user?.mobile, user?.password)
    });
  }

  handleForward = () => {
    if (this.step === 4) {
      let user = {
        "firstName": this.registerForm.value?.firstName,
        "lastName": this.registerForm.value?.firstName,
        "mobile": this.registerForm.value?.phone,
        "email": this.registerForm.value?.email,
        "role": this.registerForm.value?.userType,
        "password": this.registerForm.value?.otp
      }
      this.createUser(user);
    } else if (this.step === 6) {
      this.getSelectedProducts();
      this.step = this.step + 1;
    }
    else {
      if (this.step === 7) {
        this.submit();
      } else {
        this.step = this.step + 1;
      }

    }
  }

  handleBackward = () => {
    this.step = this.step - 1;
  }

  onOtpChange(e: any) {
    this.registerForm.patchValue({
      otp: e.join('')
    })
  }

  submit = () => {
    this.dialogRef.close(null);
    console.log(this.registerForm.value);
  }

  close = (data) => {
    this.dialogRef.close(data);
  }

}
