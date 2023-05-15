import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports: [
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
  declarations: []
})
export class MaterialModule { }
