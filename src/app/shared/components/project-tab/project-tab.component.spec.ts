import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTabComponent } from './project-tab.component';

describe('ProjectTabComponent', () => {
  let component: ProjectTabComponent;
  let fixture: ComponentFixture<ProjectTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectTabComponent]
    });
    fixture = TestBed.createComponent(ProjectTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
