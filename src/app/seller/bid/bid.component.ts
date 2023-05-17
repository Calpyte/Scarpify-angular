import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from 'src/app/common/api-config';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {

  tabs: any[] = [
    {
      id: 0,
      name: 'open',
      count: 0,
      isActive: false
    },
    {
      id: 1,
      name: 'modified',
      count: 0,
      isActive: false
    },
    {
      id: 2,
      name: 'confirmed',
      count: 0,
      isActive: false
    },
    {
      id: 3,
      name: 'closed',
      count: 0,
      isActive: false
    }
  ];
  bids: any = {
    open: [],
    modified: [],
    confirmed: [],
    closed: []
  };

  activeBids: any = [];

  constructor(private http: HttpClient, private apiConfigService: ApiConfigService) { }

  ngOnInit() {
    this.getMyBids();
    this.handleTab(this.tabs[0]);
  }

  getMyBids = () => {
    this.http.get(this.apiConfigService.getSellerBids).subscribe((bids: any) => {
      this.bids.open = bids.filter((bid) => bid?.status && bid?.status.toLowerCase() === 'open');
      this.bids.modified = bids.filter((bid) => bid?.status && bid?.status.toLowerCase() === 'modified');
      this.bids.confirmed = bids.filter((bid) => bid?.status && bid?.status.toLowerCase() === 'accepted');
      this.bids.closed = bids.filter((bid) => bid?.status && bid?.status.toLowerCase() === 'rejected');
      this.tabs = this.tabs.map((tab) => {
        tab.count = this.bids[tab?.name]?.length
        return tab;
      })
      this.handleTab(this.tabs[0]);
    });
  }

  handleTab = (selectedTab) => {
    this.tabs = this.tabs.map((tab) => {
      tab.isActive = (tab?.id === selectedTab?.id) ? true : false
      return tab;
    })
    this.activeBids = this.bids[selectedTab?.name];
  }

}
