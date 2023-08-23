import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpInvitationPageComponent } from './wp-invitation-page.component';

describe('WpInvitationPageComponent', () => {
  let component: WpInvitationPageComponent;
  let fixture: ComponentFixture<WpInvitationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WpInvitationPageComponent]
    });
    fixture = TestBed.createComponent(WpInvitationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
