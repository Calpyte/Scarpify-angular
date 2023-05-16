import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { VerificationService } from '../verification.service';
import { UserService } from '../user-service/user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input() selectedOption: string = "seller";
  userData: any = null;
  constructor(private verificationService: VerificationService, private userService: UserService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.userService.getData().subscribe((data) => {
      if (data) {
        this.userData = data;
      }
    })
  }

  onOptionSelected(isSeller: boolean) {
    this.selectedOption = isSeller ? "seller" : "buyer";
  }

  login = () => {
    this.verificationService.openLogin("/login");
  }

  logout = () => {
    this.cookieService.delete("token");
    this.cookieService.delete("refreshToken");
    this.userService.updateData(null);
    location.reload();
  }
}
