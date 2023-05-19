import { Component, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from "jwt-decode";
import { UserService } from './common/user-service/user.service';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'scrapify-angular';
  @ViewChild('drawer') sidenav: MatSidenav;
  isNavigating: boolean = false;

  constructor(private cookieService: CookieService, private userService: UserService, private router: Router) {

  }

  pages: any = [
    {
      name: 'Home',
      link: '/home',
      icon: 'home'
    },
    {
      name: 'Inventory',
      link: '/seller/inventory',
      icon: 'location_on'
    },
    {
      name: 'My Bids',
      link: '/seller/bid',
      icon: ''
    },
    {
      name: 'Retail Buying',
      link: '',
      icon: ''
    },
    {
      name: 'Rewards',
      link: '',
      icon: ''
    },
    {
      name: 'Scrap Rates',
      link: '/referral/scraprates',
      icon: ''
    },
    {
      name: 'FAQ',
      link: '',
      icon: ''
    },
    {
      name: 'Contact',
      link: 'referral/contactUs',
      icon: ''
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
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isNavigating = true;
      } else if (event instanceof NavigationEnd) {
        this.isNavigating = false;
      }
    });
  }

  goToMenu = (link) => {
    this.router.navigate([link]).then(() => {
      this.sidenav.toggle();
    })
  }

  toggle = (event) => {
    this.sidenav.toggle()
  }
}
