import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { trigger, style, animate, transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { ApiConfigService } from '../api-config';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { catchError, of, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../user-service/user.service';
import jwt_decode from "jwt-decode";
import { ToastrService } from '../toastr/toastr.service';
import { InventoryService } from 'src/app/seller/inventory/inventory.service';


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
    private cookieService: CookieService,
    private authService: AuthServiceService,
    private toastrService: ToastrService,
    private userService: UserService,
    private apiConfigService: ApiConfigService,
    private inventoryService: InventoryService) { }

  ngOnInit() {
    this.getProducts();
    this.registerForm = this.fb.group({
      userType: ['seller'],
      firstName: ['', [Validators.required]],
      lastName: [''],
      businessType: [''],
      email: ['', [Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[1-9]{1}[0-9]{9}$')]],
      otp: ['', Validators.required],
      address: ['', Validators.required],
      location: ['', Validators.required],
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
        this.toastrService.showSuccess("Registered successfully !");
        this.step++;
        this.getProducts();
      },
      error: (err) => { this.toastrService.showError("Login Failed") }
    });
  }

  createUser = (user) => {
    const formData = new FormData();
    formData.append('file', null);
    formData.append('request', JSON.stringify(user));
    this.http.post(this.apiConfigService.createUser, formData).
      pipe(catchError(err => { this.toastrService.showError("Registration Failed"); return throwError(() => err) })).subscribe((res) => {
        this.loginUser(user?.mobile, user?.password)
      });
  }

  handleForward = () => {
    if (this.step === 1) {
      this.registerForm.controls['firstName'].markAsTouched();
      if (!this.registerForm.controls['firstName'].invalid) {
        this.step++;
      }
    } else if (this.step === 2) {
      this.registerForm.controls['email'].markAsTouched();
      if (!this.registerForm.controls['email'].invalid) {
        this.step++;
      }
    } else if (this.step === 3) {
      this.registerForm.controls['phone'].markAsTouched();
      if (!this.registerForm.controls['phone'].invalid) {
        this.step++;
      }
    } else if (this.step === 4) {
      if (this.registerForm.value.otp?.length === 6) {
        this.createUser({
          "firstName": this.registerForm.value?.firstName,
          "lastName": this.registerForm.value?.firstName,
          "mobile": this.registerForm.value?.phone,
          "email": this.registerForm.value?.email,
          "role": this.registerForm.value?.userType,
          "password": this.registerForm.value?.otp
        });
      } else {
        this.toastrService.showError("Enter your OTP");
      }
    } else if (this.step === 5) {
      this.registerForm.controls['address'].markAsTouched();
      if (this.registerForm.value.address.trim()?.length > 0 && this.registerForm.value?.location) {
        this.step++;
      } else {
        this.toastrService.showError("Enter your address and pick yout location on map");
      }
    } else if (this.step === 6) {
      this.getSelectedProducts();
      if (this.registerForm?.value?.products?.length > 0) {
        this.step++;
      } else {
        this.toastrService.showError("Please select atleast one product");
      }
    } else if (this.step === 7) {
      this.submit();
    }
    else {
      this.step++;
    }
  }

  handleBackward = () => {
    if (this.step != 5) {
      this.step--;
    }
  }

  onOtpChange(e: any) {
    this.registerForm.patchValue({
      otp: e.join('')
    })
  }

  saveAddress = () => {
    let address = {
      addresses: [
        {
          name: this.registerForm.value?.address,
          latitude: this.registerForm.value?.location?.lat,
          longitude: this.registerForm.value?.location?.lng,
          geocode: null
        }
      ],
    }
    this.http.put(this.apiConfigService.saveAddressToConsumer, address).subscribe((res) => {
      console.log("Address saved successfully !");
    })
  }
  saveProducts = () => {
    let products = [];
    this.registerForm.value?.products.forEach((e) => {
      products = [...products, ...e.products];
    });
    let result = {
      "products": products
    }
    this.http.put(this.apiConfigService.saveProductToConsumer, result).subscribe((res) => {
      console.log("Products saved successfully !");
      this.saveProductsToInventory();
    })
  }

  saveProductsToInventory = () => {
    let products = [];
    this.registerForm.value?.products.forEach((e) => {
      products = [...products, ...e.products];
    });
    if (this.registerForm.value?.userType.toLowerCase() === 'seller') {
      let inventories = products.map((product) => ({ product: product, name: product?.name, quantity: 0, price: 0, unit: null, icon: null, icon2: null }));
      let result = {
        stock: inventories
      }
      this.inventoryService.updateInventory(result).subscribe((data) => {
        console.log("inventory updated");
      });
    }
  }

  submit = () => {
    this.saveAddress();
    this.saveProducts();
    this.dialogRef.close(null);
    console.log(this.registerForm.value);
  }

  close = (data) => {
    this.dialogRef.close(data);
  }

}
