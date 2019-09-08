import { TestBed } from '@angular/core/testing';

import { HttpwrapperService } from './httpwrapper.service';

describe('HttpwrapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpwrapperService = TestBed.get(HttpwrapperService);
    expect(service).toBeTruthy();
  });
});
