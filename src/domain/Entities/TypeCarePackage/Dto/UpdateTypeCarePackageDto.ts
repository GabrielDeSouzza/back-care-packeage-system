import { TypeCarePackageEntityProps } from '../TypeCarePackageEntity';

export abstract class UpdateTypeCarePackageDto
  implements
    Partial<Omit<TypeCarePackageEntityProps, 'createdAt' | 'updatedAt'>>
{
  id: string;
  newName?: string;
  oldName?: string;
  itensName?: string[];
  deletedItensName?: string[];
  updatedBy: string;
}
