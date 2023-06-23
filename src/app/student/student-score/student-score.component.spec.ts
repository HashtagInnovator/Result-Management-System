import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentScoreComponent } from './student-score.component';

describe('StudentScoreComponent', () => {
  let component: StudentScoreComponent;
  let fixture: ComponentFixture<StudentScoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentScoreComponent]
    });
    fixture = TestBed.createComponent(StudentScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
