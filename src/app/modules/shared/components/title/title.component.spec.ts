import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;
  const testTitle = 'Test title';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TitleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    component.title = testTitle;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title '${testTitle}'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(testTitle);
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title-text').textContent).toContain(
      testTitle
    );
  });
});
