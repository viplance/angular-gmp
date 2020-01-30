import { ICourse } from '../interfaces';

export class CourseModel implements ICourse {
  id: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
}
