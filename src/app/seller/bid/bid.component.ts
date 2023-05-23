import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { BidService } from './bid.service';
import { ToastrService } from 'src/app/common/toastr/toastr.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageBoxComponent } from './message-box/message-box.component';


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
  isDetail: boolean = false;
  activeBids: any = [];
  selectedTab: any = this.tabs[0];
  selectedBid: any = null;

  constructor(private bidService: BidService, private toastrService: ToastrService, public dialog: MatDialog) { }

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
      this.modifyBid(selectedBid);
    } else if (action === 'reject') {
      this.rejectBid(selectedBid?.id);
    } else if (action === 'accept') {
      this.acceptBid(selectedBid?.id);
    }
  }

  acceptBid = (id) => {
    this.bidService.acceptBid(id).subscribe((res) => {
      this.toastrService.showSuccess("Bid accepted successfully !");
      this.getMyBids();
      this.isDetail = false;
    })
  }

  rejectBid = (id) => {
    this.bidService.rejectBid(id).subscribe((res) => {
      this.toastrService.showSuccess("Bid rejected successfully !");
      this.getMyBids();
      this.isDetail = false;
    })
  }

  modifyBid = (selectedBid) => {
    this.dialog.closeAll();
    this.dialog.open(MessageBoxComponent, {
      data: selectedBid,
      position: { right: '0', top: '0' },
      minHeight: '100vh',
      maxWidth: '350px',
      hasBackdrop: false
    }).afterClosed().subscribe((res) => {
      if (res) {
        let message = {
          "id": selectedBid?.id,
          "message": res,
          "dateTime": new Date()
        }
        this.bidService.modifyBid(selectedBid?.id, message).subscribe((res) => {
          this.toastrService.showSuccess("Bid modified successfully !");
          this.getMyBids();
          this.isDetail = false;
        })
      }
    });
  }

  detailAction = (event) => {
    this.handleAction(event?.bid, event?.action);
  }

}
