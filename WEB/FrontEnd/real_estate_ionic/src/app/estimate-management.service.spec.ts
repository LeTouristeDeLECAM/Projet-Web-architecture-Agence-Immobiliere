import { TestBed } from '@angular/core/testing';

import { EstimateManagementService } from './estimate-management.service';

describe('EstimateManagementService', () => {
  let service: EstimateManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstimateManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
