import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NgOtpInputModule } from 'ng-otp-input';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    TopBarComponent,
    LoginComponent,
    TopBarComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgOtpInputModule
  ],
  exports: [MaterialModule, NgOtpInputModule, TopBarComponent, LoginComponent, RegisterComponent]
})
export class CommonSharedModule { }
