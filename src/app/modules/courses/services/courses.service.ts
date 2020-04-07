import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'environments/environment';
// import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from 'app/modules/shared/interfaces';
import { courses as Courses } from '../fake-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses = Courses;

  constructor(private http: HttpClient) {}

  private newId(): number {
    return this.courses.length;
  }

  getAll({ start, count }: { start: number; count: number }): Observable<Course[]> {
    return this.http
      .get(`${environment.apiUrl}/courses?`, { params: { start: start.toString(), count: count.toString() } })
      .pipe(
        map((res: []) => {
          return this.courseDTO(res);
        })
      );
  }

  getById(id: number): Course {
    return this.courses.find((course: Course) => course.id === id);
  }

  create(course: Course): Course {
    const newCourse = {
      id: this.newId,
      ...course,
    };
    this.courses.push(newCourse);
    return newCourse;
  }

  delete(id: number): void {
    const index = this.courses.findIndex((course: Course) => course.id === id);
    this.courses.splice(index, 1);
  }

  update(course: Course): Course {
    const index = this.courses.findIndex((courseItem: Course) => courseItem.id === course.id);
    this.courses[index] = course;
    return course;
  }

  /* DTO */
  private courseDTO(res: any[]): Course[] {
    return res.map((course: any) => {
      return {
        id: course.id,
        title: course.name,
        creationDate: new Date(course.date),
        duration: course.length,
        description: course.description,
        topRated: course.isTopRated,
      };
    });
  }
}
