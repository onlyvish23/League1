import { TestBed } from '@angular/core/testing';

import { ClubDetailService } from './club-detail.service';

describe('ClubDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClubDetailService = TestBed.get(ClubDetailService);
    expect(service).toBeTruthy();
  });
});
