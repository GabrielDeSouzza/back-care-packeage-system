import { PersonEntityProps } from '../PersonEntity';

export abstract class UpdatePersonDto
  implements
    Partial<Omit<PersonEntityProps, 'createdAt' | 'updatedAt' | 'createdBy'>>
{
  id: string;
  name?: string;
  lastName?: string;
  document?: number;
  hasChild?: boolean;
  dateBirth?: Date;
  gender?: string;
  updatedBy: string;
}
