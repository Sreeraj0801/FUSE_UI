import { TestBed } from '@angular/core/testing';

import { WpInvitationPageService } from './wp-invitation-page.service';

describe('WpInvitationPageService', () => {
  let service: WpInvitationPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WpInvitationPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
