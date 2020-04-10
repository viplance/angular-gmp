import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course, CourseDTO } from 'app/modules/shared/interfaces';
import { courses as Courses } from '../fake-data';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses = Courses;

  constructor(private http: HttpClient) {}

  private newId(): number {
    return this.courses.length;
  }

  getAll({
    start,
    count,
    textFragment,
  }: {
    start: number;
    count: number;
    textFragment?: string;
  }): Observable<Course[]> {
    let params: HttpParams;
    if (textFragment) {
      params = new HttpParams()
        .set('start', start.toString())
        .set('count', count.toString())
        .set('textFragment', textFragment);
    } else {
      params = new HttpParams().set('start', start.toString()).set('count', count.toString());
    }
    return this.http.get(`${environment.apiUrl}/courses`, { params }).pipe(
      map((res: []) => {
        return res.map((course: CourseDTO) => this.courseDTO(course));
      })
    );
  }

  getById(id: number): Observable<Course> {
    return this.http.get(`${environment.apiUrl}/courses/${id}`).pipe(map((res: CourseDTO) => this.courseDTO(res)));
  }

  create(course: Course): Observable<any> {
    return this.http.post(`${environment.apiUrl}/courses`, this.course2serverModel(course));
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/courses/${id}`);
  }

  update(course: Course): Observable<any> {
    return this.http.patch(`${environment.apiUrl}/courses/${course.id}`, this.course2serverModel(course));
  }

  /* DTO */
  private courseDTO(course: CourseDTO): Course {
    return {
      id: course.id,
      title: course.name,
      creationDate: new Date(course.date),
      duration: course.length,
      description: course.description,
      topRated: course.isTopRated,
    };
  }

  private course2serverModel(course: Course): CourseDTO {
    return {
      id: course.id,
      name: course.title,
      date: course.creationDate.toString(),
      length: course.duration,
      description: course.description,
      isTopRated: course.topRated,
    };
  }
}
