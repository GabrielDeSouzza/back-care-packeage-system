import { TypeCarePackageEntityProps } from '../TypeCarePackageEntity';

export abstract class CreateTypeCarePackageDto
  implements Omit<TypeCarePackageEntityProps, 'id' | 'createdAt' | 'updatedAt'>
{
  name: string;
  createdBy: string;
  itensName: string[];
  updatedBy: string;
}
