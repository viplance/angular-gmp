import { Course } from '../interfaces';

export class CourseModel implements Course {
  id: number;
  title: string;
  creationDate: Date;
  duration: string;
  description: string;
}
