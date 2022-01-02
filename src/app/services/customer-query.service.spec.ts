import { TestBed } from '@angular/core/testing';

import { CustomerQueryService } from './customer-query.service';

describe('CustomerQueryServiceService', () => {
  let service: CustomerQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
