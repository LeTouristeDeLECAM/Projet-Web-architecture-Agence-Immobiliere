import { TestBed } from '@angular/core/testing';

import { RenterManagementService } from './renter-management.service';

describe('RenterManagementService', () => {
  let service: RenterManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenterManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
