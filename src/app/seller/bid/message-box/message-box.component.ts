import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    @Inject(MAT_DIALOG_DATA) public data: any, private toastrService: ToastrService) { }



  ngOnInit() {

  }

  sendMessage = () => {
    if (this.message.trim() != '') {
      this.dialogRef.close(this.message);
    } else {
      this.toastrService.showError("Enter a message");
    }
  }

}
