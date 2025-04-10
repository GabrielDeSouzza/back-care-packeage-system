import { CarePackageItemEntityProps } from '../CarePackageItemEntity';

export abstract class CreateCarePackageItemDto
  implements Omit<CarePackageItemEntityProps, 'id' | 'createdAt' | 'updatedAt'>
{
  name: string;
  createdBy: string;
  updatedBy: string;
}
