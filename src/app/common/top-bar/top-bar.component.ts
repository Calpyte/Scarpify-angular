import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  constructor(private verificationService: VerificationService, private userService: UserService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.userService.getData().subscribe((data) => {
      if (data) {
        this.userData = data;
      } else {
        this.userData = null;
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
    this.userService.updateData(null);
    this.cookieService.delete("token");
    this.cookieService.delete("refreshToken");
    location.reload();
  }

  toggleSideNavBar = () => {
    this.toggle.emit(true);
  }
}
