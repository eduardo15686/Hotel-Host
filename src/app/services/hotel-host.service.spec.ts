import { TestBed } from '@angular/core/testing';

import { HotelHostService } from './hotel-host.service';

describe('HotelHostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelHostService = TestBed.get(HotelHostService);
    expect(service).toBeTruthy();
  });
});
