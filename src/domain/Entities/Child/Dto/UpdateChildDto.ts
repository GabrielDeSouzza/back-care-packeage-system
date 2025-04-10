import { ChildEntityProps } from '../ChildEntity';

export abstract class UpdateChildDto
  implements
    Partial<Omit<ChildEntityProps, 'createdAt' | 'updatedAt' | 'createdBy'>>
{
  id: string;
  name?: string;
  lastName?: string;
  dateBirh?: Date;
  responsibleId?: string;
  updatedBy: string;
}
