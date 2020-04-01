import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCardComponent } from './course-card.component';
import { courses as Courses } from '../courses-list/fake-data';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCardComponent]
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

  it('is edit method exists', () => {
    const spy = spyOn(component, 'editCourse');
    component.editCourse();
    expect(spy).toHaveBeenCalled();
  });

  it('should render title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      component.course.title.toUpperCase()
    );
  });
});
