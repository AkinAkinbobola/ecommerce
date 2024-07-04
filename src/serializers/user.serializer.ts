import { Exclude } from 'class-transformer';

export class UserSerializer {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserSerializer>) {
    Object.assign(this, partial);
  }
}
