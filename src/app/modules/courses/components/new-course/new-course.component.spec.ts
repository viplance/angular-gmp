import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { ReplaySubject } from 'rxjs';

import { NewCourseComponent } from './new-course.component';
import { courses as Courses } from '../../fake-data';

import { CoursesService, CoursesServiceStub } from '../../services';

describe('NewCourseComponent', () => {
  let component: NewCourseComponent;
  let fixture: ComponentFixture<NewCourseComponent>;
  const actions = new ReplaySubject(1);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, StoreModule.forRoot({})],
      declarations: [NewCourseComponent],
      providers: [
        {
          provide: CoursesService,
          useClass: CoursesServiceStub,
        },
        provideMockActions(() => actions),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.course = Courses[0]; // set @Input() course value
    expect(component).toBeDefined();
  });
});
