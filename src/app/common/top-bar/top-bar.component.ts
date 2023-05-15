import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input() selectedOption: string = "seller";
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onOptionSelected(isSeller: boolean) {
    if (isSeller) {
      this.selectedOption = "seller";
    } else {
      this.selectedOption = "buyer";
    }
  }

  login = () => {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '492px',
      data: null,
    });
    dialogRef.afterClosed().subscribe(result => {
      // alert(JSON.stringify(result));
      console.log(`Dialog result: ${result}`);
    });
  }
}
