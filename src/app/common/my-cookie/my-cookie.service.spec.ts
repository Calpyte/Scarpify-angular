/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyCookieService } from './my-cookie.service';

describe('Service: MyCookie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyCookieService]
    });
  });

  it('should ...', inject([MyCookieService], (service: MyCookieService) => {
    expect(service).toBeTruthy();
  }));
});
