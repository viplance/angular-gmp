import { IUser } from '../interfaces';

export class UserModel implements IUser {
  id: number;
  firstName: string;
  lastName: string;
}
