import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioCardComponent } from './radio-card.component';

describe('RadioCardComponent', () => {
  let component: RadioCardComponent;
  let fixture: ComponentFixture<RadioCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioCardComponent]
    });
    fixture = TestBed.createComponent(RadioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
