import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CoursesListComponent } from './courses-list.component';
import { provideMockStore } from '@ngrx/store/testing';
import { featureName } from '../../store';
import { CoursesService, CoursesServiceStub } from '../../services';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  const initialState = { [featureName]: { courses: [] } };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [CoursesListComponent],
      providers: [{ provide: CoursesService, useClass: CoursesServiceStub }, provideMockStore({ initialState })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
