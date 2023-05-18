import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiConfigService } from 'src/app/common/api-config';
import { trigger, style, animate, transition } from '@angular/animations';
import { BidService } from './bid.service';


@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ])
    ])
  ]
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
  isDetail: boolean = true;
  activeBids: any = [];
  selectedTab: any = this.tabs[0];
  selectedBid: any = null;

  constructor(private bidService: BidService) { }

  ngOnInit() {
    this.getMyBids();
    this.handleTab(this.tabs[0]);
  }

  getMyBids = () => {
    this.bidService.getMyBids().subscribe((bids: any) => {
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
    this.selectedTab = selectedTab;
  }

  handleAction = (selectedBid, action) => {
    if (action === 'more') {
      this.selectedBid = selectedBid;
      this.isDetail = true;
    } else if (action === "close") {
      this.isDetail = false;
    } else if (action === 'modify') {
      this.modifyBid(selectedBid?.id, null);
    } else if (action === 'reject') {
      this.rejectBid(selectedBid?.id);
    } else if (action === 'accept') {
      this.acceptBid(selectedBid?.id);
    }
  }

  acceptBid = (id) => {
    this.bidService.acceptBid(id).subscribe((res) => {
      this.getMyBids();
      this.isDetail = false;
    })
  }

  rejectBid = (id) => {
    this.bidService.rejectBid(id).subscribe((res) => {
      this.getMyBids();
      this.isDetail = false;
    })
  }

  modifyBid = (id, data) => {
    this.bidService.modifyBid(id, data).subscribe((res) => {
      this.getMyBids();
      this.isDetail = false;
    })
  }

  detailAction = (event) => {
    this.handleAction(event?.bid, event?.action);
  }

}
