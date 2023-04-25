import { TestBed } from '@angular/core/testing';

import { PropertyManagementService } from './property-management.service';

describe('PropertyManagementService', () => {
  let service: PropertyManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
