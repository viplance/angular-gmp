import { of } from 'rxjs';

export class CoursesServiceStub {
  getAll() {
    return of([{}]);
  }

  getById() {
    return of({});
  }

  delete() {}

  update() {}
}
