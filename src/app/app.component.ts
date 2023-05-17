import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from "jwt-decode";
import { UserService } from './common/user-service/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'scrapify-angular';

  constructor(private cookieService: CookieService, private userService: UserService) {

  }

  ngOnInit() {
    const token = this.cookieService.get("token");
    // if (token) {
    //   const decoded = jwt_decode(token);
    //   this.userService.updateData({
    //     userName: decoded['given_name'],
    //     email: decoded['email']
    //   })
    // }
  }
}
