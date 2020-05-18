import { Course } from './course.interface';
import { User } from './user.interface';

export interface State {
  courses: Course[];
  user: User;
}
