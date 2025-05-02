import { CreateChildDto } from '../../Child/Dto/CreateChildDto';
import { PersonEntityProps } from '../PersonEntity';

export abstract class CreatePersonDto
  implements Omit<PersonEntityProps, 'id' | 'createdAt' | 'updatedAt'>
{
  name: string;
  lastName: string;
  document: string;
  hasChild: boolean;
  birthdayDate: Date;
  gender: string;
  children?: CreateChildrenRelationPersonDto[];
  createdBy: string;
  updatedBy: string;
}

export abstract class CreateChildrenRelationPersonDto
  implements
    Omit<
      CreateChildDto,
      'responsibleId' | 'createdAt' | 'updatedAt' | 'updatedBy' | 'createdBy'
    >
{
  gender: string;
  name: string;
  lastName: string;
  birthdayDate: Date;
}
