import { UpdateChildDto } from '../../Child/Dto/UpdateChildDto';
import { PersonEntityProps } from '../PersonEntity';

export abstract class UpdatePersonDto
  implements
    Partial<Omit<PersonEntityProps, 'createdAt' | 'updatedAt' | 'createdBy'>>
{
  name?: string;
  lastName?: string;
  newDocument?: string;
  oldDocument?: string;
  hasChild?: boolean;
  birthdayDate?: Date;
  children?: UpdateChildrenRelationPersonDto[];
  deletedChildrenIds?: string[];
  gender?: string;
  updatedBy: string;
}

export abstract class UpdateChildrenRelationPersonDto
  implements
    Partial<
      Omit<
        UpdateChildDto,
        'createdAt' | 'updatedAt' | 'updatedBy' | 'createdBy'
      >
    >
{
  id?: string;
  gender?: string;
  name?: string;
  lastName?: string;
  birthdayDate?: Date;
}
