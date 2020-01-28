import { User } from 'app/interfaces';

export class UserModel implements User {
  id: number;
  firstName: string;
  lastName: string;
}
