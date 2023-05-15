import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
// import { LeftBarComponent } from './left-bar/left-bar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { LeftBarComponent } from '../home/home/left-bar/left-bar.component';

@NgModule({
  declarations: [
    TopBarComponent,
    // LeftBarComponent,
    LoginComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [MaterialModule, TopBarComponent, LoginComponent]
})
export class CommonSharedModule { }
