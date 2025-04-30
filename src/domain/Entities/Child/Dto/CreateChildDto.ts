import { ChildEntityProps } from '../ChildEntity';

export abstract class CreateChildDto
  implements Omit<ChildEntityProps, 'id' | 'createdAt' | 'updatedAt'>
{
  name: string;
  lastName: string;
  birthdayDate: Date;
  responsibleId: string;
  createdBy: string;
  updatedBy: string;
}
