import { TestBed } from '@angular/core/testing';

import { WorspacePageService } from './worspace-page.service';

describe('WorspacePageService', () => {
  let service: WorspacePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorspacePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
