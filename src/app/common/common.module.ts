import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NgOtpInputModule } from 'ng-otp-input';
import { RegisterComponent } from './register/register.component';
import { ProductsPickerComponent } from './products-picker/products-picker.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { AgmCoreModule } from '@agm/core';
import { LocationPickerComponent } from './location-picker/location-picker.component';
import { VerificationService } from './verification.service';
@NgModule({
  declarations: [
    TopBarComponent,
    LoginComponent,
    TopBarComponent,
    RegisterComponent,
    ProductsPickerComponent,
    ProductsViewComponent,
    LocationPickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgOtpInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4F9JYoct7v7oGvirzAx7_oK6XkNyL1oM'
    })
  ],
  exports: [
    MaterialModule,
    NgOtpInputModule,
    TopBarComponent,
    LoginComponent,
    RegisterComponent,
    ProductsPickerComponent,
    ProductsViewComponent,
    LocationPickerComponent,
  ],
  providers: [
    VerificationService
  ]
})
export class CommonSharedModule { }
