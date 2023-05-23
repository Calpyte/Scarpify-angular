import { Component, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from "jwt-decode";
import { UserService } from './common/user-service/user.service';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';


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
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isNavigating = true;
      } else if (event instanceof NavigationEnd) {
        this.isNavigating = false;
      }
      if (event instanceof NavigationCancel) {
        this.isNavigating = false;
      }
      if (event instanceof NavigationError) {
        this.isNavigating = false;
      }
    });
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
      name: 'Refer N Earn',
      link: '/refer',
      icon: ''
    },
    {
      name: 'FAQ',
      link: '/faq',
      icon: ''
    },
    {
      name: 'Contact',
      link: 'referral/contactUs',
      icon: ''
    }
  ]

  validateToken = (token) => {
    if (token && token != undefined && token != 'undefined' && token != 'null') {
      return true
    } else {
      return false;
    }
  }

  ngOnInit() {
    const token = this.cookieService.get("token");
    const refreshToken = this.cookieService.get("refreshToken");
    if (this.validateToken(token) && this.validateToken(refreshToken)) {
      const decoded = jwt_decode(token);
      const roles = decoded['realm_access']['roles'];
      console.log(decoded);
      this.userService.updateData({
        userName: decoded['given_name'],
        email: decoded['email'],
        role: roles.includes('ROLE_BUYER') ? 'buyer' : roles.includes('ROLE_SELLER') ? "seller" : null
      })
    } else {
      this.cookieService.delete("token");
      this.cookieService.delete("refreshToken");
      this.userService.updateData(null);
    }
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
