/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReferralService } from './referral.service';

describe('Service: Referral', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferralService]
    });
  });

  it('should ...', inject([ReferralService], (service: ReferralService) => {
    expect(service).toBeTruthy();
  }));
});
