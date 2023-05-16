import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { VerificationService } from '../verification.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input() selectedOption: string = "seller";
  constructor(private verificationService: VerificationService) { }

  ngOnInit(): void {
  }

  onOptionSelected(isSeller: boolean) {
    this.selectedOption = isSeller ? "seller" : "buyer";
  }

  login = () => {
    this.verificationService.openLogin();
  }

}
