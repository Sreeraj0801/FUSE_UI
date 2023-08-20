import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianButtonComponent } from './accordian-button.component';

describe('AccordianButtonComponent', () => {
  let component: AccordianButtonComponent;
  let fixture: ComponentFixture<AccordianButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordianButtonComponent]
    });
    fixture = TestBed.createComponent(AccordianButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
