import { TestBed } from '@angular/core/testing';

import { PusintekLibService } from './pusintek-lib.service';

describe('PusintekLibService', () => {
  let service: PusintekLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PusintekLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
