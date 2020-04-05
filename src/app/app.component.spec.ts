import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.debugElement.componentInstance;

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title`, () => {
    expect(app.title).toEqual('Angular Global Mentoring Program');
  });
});
