import { UserEntityProps } from '../UserEntity';

export abstract class UpdateUserDto
  implements
    Partial<Omit<UserEntityProps, 'createdAt' | 'updatedAt' | 'createdBy'>>
{
  id: string;
  name?: string;
  email?: string;
  password?: string;
  updatedBy?: string;
}
