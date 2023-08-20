import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinCardComponent } from './min-card.component';

describe('MinCardComponent', () => {
  let component: MinCardComponent;
  let fixture: ComponentFixture<MinCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinCardComponent]
    });
    fixture = TestBed.createComponent(MinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
