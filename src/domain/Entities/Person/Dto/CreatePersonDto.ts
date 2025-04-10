import { PersonEntityProps } from '../PersonEntity';

export abstract class CreatePersonDto
  implements Omit<PersonEntityProps, 'id' | 'createdAt' | 'updatedAt'>
{
  name: string;
  lastName: string;
  document: number;
  hasChild: boolean;
  dateBirth: Date;
  gender: string;
  createdBy: string;
  updatedBy: string;
}
