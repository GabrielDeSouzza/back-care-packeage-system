import { UserEntityProps } from '../UserEntity';

export abstract class CreateUserDto
  implements Omit<UserEntityProps, 'createdAt' | 'id' | 'updatedAt'>
{
  name: string;
  email: string;
  password: string;
}
