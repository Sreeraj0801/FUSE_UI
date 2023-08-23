import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMainCardComponent } from './task-main-card.component';

describe('TaskMainCardComponent', () => {
  let component: TaskMainCardComponent;
  let fixture: ComponentFixture<TaskMainCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskMainCardComponent]
    });
    fixture = TestBed.createComponent(TaskMainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
