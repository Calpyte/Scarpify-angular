import { Component, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from "jwt-decode";
import { UserService } from './common/user-service/user.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'scrapify-angular';
  @ViewChild('drawer') sidenav: MatSidenav;

  constructor(private cookieService: CookieService, private userService: UserService, private router: Router) {

  }

  pages: any = [
    {
      name: 'Home',
      link: '/home'
    },
    {
      name: 'Inventory',
      link: '/seller/inventory'
    },
    {
      name: 'My Bids',
      link: '/seller/bid'
    },
    {
      name: 'Retail Buying',
      link: ''
    },
    {
      name: 'Rewards',
      link: ''
    },
    {
      name: 'Scrap Rates',
      link: ''
    },
    {
      name: 'FAQ',
      link: ''
    },
    {
      name: 'Contact',
      link: ''
    }
  ]

  ngOnInit() {
    const token = this.cookieService.get("token");
    if (token) {
      const decoded = jwt_decode(token);
      this.userService.updateData({
        userName: decoded['given_name'],
        email: decoded['email']
      })
    }
  }

  goToMenu = (link) => {
    this.router.navigate([link])
    this.sidenav.toggle();
  }

  toggle = (event) => {
    this.sidenav.toggle()
  }
}
