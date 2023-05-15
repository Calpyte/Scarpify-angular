import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    TopBarComponent,
    LeftBarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [MaterialModule, TopBarComponent, LeftBarComponent, LoginComponent]
})
export class CommonSharedModule { }
