import { TestBed } from '@angular/core/testing';

import { HttpsApiService } from './https-api.service';

describe('HttpsApiService', () => {
  let service: HttpsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
