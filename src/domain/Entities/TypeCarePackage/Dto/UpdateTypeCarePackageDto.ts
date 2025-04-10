import { TypeCarePackageEntityProps } from '../TypeCarePackageEntity';

export abstract class UpdateTypeCarePackageDto
  implements
    Partial<Omit<TypeCarePackageEntityProps, 'createdAt' | 'updatedAt'>>
{
  id: string;
  name?: string;
  updatedBy: string;
}
