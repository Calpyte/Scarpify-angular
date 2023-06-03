import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { VerificationService } from '../verification.service';
import { UserService } from '../user-service/user.service';
import { CookieService } from 'ngx-cookie-service';
import { trigger, style, animate, transition } from '@angular/animations';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class TopBarComponent implements OnInit {
  @Input() selectedOption: string = "seller";
  userData: any = null;
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  @Output() loginResult: EventEmitter<any> = new EventEmitter();
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
    let result = this.verificationService.openLogin("/login");
    this.verificationService.currentMessage.subscribe(message => {
      this.loginResult.emit(message);
    });
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
