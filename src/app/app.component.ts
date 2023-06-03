import { Component, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from "jwt-decode";
import { UserService } from './common/user-service/user.service';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { TransactionService } from './transaction/transaction.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'scrapify-angular';
  @ViewChild('drawer') sidenav: MatSidenav;
  isNavigating: boolean = false;
  pages: any = [];
  pendingTransactions: any[] = [];

  constructor(private cookieService: CookieService, private userService: UserService, private router: Router, private transactionService: TransactionService) {
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
    this.userService.getData().subscribe((data) => {
      if (data && data?.role === 'buyer') {
        this.pages = this.buyerMenus;
      } else {
        this.pages = this.sellerMenus;
      }
    })
  }



  sellerMenus: any = [
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

  buyerMenus: any = [
    {
      name: 'Home',
      link: '/home',
      icon: 'home'
    },
    {
      name: 'My Bids',
      link: '/buyer',
      icon: ''
    },
    {
      name: 'Retail Buying',
      link: '/buyer/retail',
      icon: ''
    },
    {
      name: 'Rewards',
      link: '/buyer/retail',
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

  async ngOnInit() {
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
      });
      this.pendingTransactions = await this.getTransactionPending();
      this.openPendingTransaction();
      // this.pages = this.userData ? this.buyerMenus : this.sellerMenus
    } else {
      this.cookieService.delete("token");
      this.cookieService.delete("refreshToken");
      this.userService.updateData(null);
      // this.pages = this.sellerMenus;
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
  async onLoginResult(event) {
    if (event) {
      this.pendingTransactions = await this.getTransactionPending();
      this.openPendingTransaction();
    }
  }
  async getTransactionPending() {
    return await this.transactionService.getTransactionPending().toPromise();
  }
  openPendingTransaction() {
    this.transactionService.openTransactionModal(this.pendingTransactions);
  }
}
