import { TestBed } from '@angular/core/testing';

import { VerifyPageService } from './verify-page.service';

describe('VerifyPageService', () => {
  let service: VerifyPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
