import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogService } from 'src/app/common/confirmation-dialog/confirmation-dialog.service';
import { ToastrService } from 'src/app/common/toastr/toastr.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  message: string = "";

  date: any = new Date();

  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any, private toastrService: ToastrService, private confirmationDialogService: ConfirmationDialogService) { }



  ngOnInit() {

  }

  sendMessage = () => {
    if (this.message.trim() != '') {
      this.confirmationDialogService.openModal({ title: "Are u sure to modify this bid ? " }).afterClosed().subscribe((res) => {
        if (res) {
          this.dialogRef.close(this.message);
        }
      })
    } else {
      this.toastrService.showError("Enter a message");
    }
  }

}
