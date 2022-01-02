import { TestBed } from '@angular/core/testing';

import { CustomerCommandsService } from './customer-commands.service';

describe('CustomerCommandsService', () => {
  let service: CustomerCommandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerCommandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
