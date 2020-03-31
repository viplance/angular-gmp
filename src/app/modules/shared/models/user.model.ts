import { User } from '../interfaces';

export class UserModel implements User {
  id: number;
  firstName: string;
  lastName: string;
}
