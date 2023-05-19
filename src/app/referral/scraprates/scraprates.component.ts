import { Component, OnInit } from '@angular/core';
import { ReferralService } from '../referral.service';

@Component({
  selector: 'app-scraprates',
  templateUrl: './scraprates.component.html',
  styleUrls: ['./scraprates.component.css']
})
export class ScrapratesComponent implements OnInit {

  searchTerm;

  products: any[] = [];

  constructor(private referralService: ReferralService) { }

  ngOnInit() {
    this.referralService.getProducts().then((data) => {
      this.products = data?.products;
    });
  }

}
