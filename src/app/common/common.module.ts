import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { RegisterComponent } from './register/register.component';
import { ProductsPickerComponent } from './products-picker/products-picker.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { AgmCoreModule } from '@agm/core';
import { LocationPickerComponent } from './location-picker/location-picker.component';
import { VerificationService } from './verification.service';
import { LoginService } from '../service/login.service';
import { AuthServiceService } from '../service/auth-service.service';
import { IndexedDBService } from '../service/IndexedDB.service';
import { ApiConfigService } from './api-config';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog/confirmation-dialog.component';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { MyCookieService } from './my-cookie/my-cookie.service';
@NgModule({
  declarations: [
    TopBarComponent,
    LoginComponent,
    TopBarComponent,
    RegisterComponent,
    ProductsPickerComponent,
    ProductsViewComponent,
    LocationPickerComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgxOtpInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4F9JYoct7v7oGvirzAx7_oK6XkNyL1oM'
    })
  ],
  exports: [
    MaterialModule,
    FormsModule,
    TopBarComponent,
    LoginComponent,
    RegisterComponent,
    ProductsPickerComponent,
    ProductsViewComponent,
    LocationPickerComponent,
    AgmCoreModule,
    ConfirmationDialogComponent,
    NgxOtpInputModule,

  ],
  providers: [
    VerificationService,
    LoginService,
    AuthServiceService,
    IndexedDBService,
    ApiConfigService,
    ConfirmationDialogService,
    MyCookieService
  ]
})
export class CommonSharedModule { }
