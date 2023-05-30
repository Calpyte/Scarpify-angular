/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuyerBidService } from './buyer-bid.service';

describe('Service: BuyerBid', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuyerBidService]
    });
  });

  it('should ...', inject([BuyerBidService], (service: BuyerBidService) => {
    expect(service).toBeTruthy();
  }));
});
