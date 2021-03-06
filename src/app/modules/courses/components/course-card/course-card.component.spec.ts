import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CourseCardComponent } from './course-card.component';
import { DurationPipe } from '../../pipes/duration.pipe';
import { courses as Courses } from '../../fake-data';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CourseCardComponent, DurationPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.course = Courses[0]; // set @Input() course value
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('is delete method exists', () => {
    const spy = spyOn(component, 'deleteCourse');
    component.deleteCourse();
    expect(spy).toHaveBeenCalled();
  });

  it('should render title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(component.course.title.toUpperCase());
  });
});
