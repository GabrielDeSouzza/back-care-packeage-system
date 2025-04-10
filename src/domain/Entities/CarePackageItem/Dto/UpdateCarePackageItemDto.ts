import { CarePackageItemEntityProps } from '../CarePackageItemEntity';

export abstract class UpdateCarePackageItemDto
  implements
    Partial<Omit<CarePackageItemEntityProps, 'createdAt' | 'updatedAt'>>
{
  id: string;
  name?: string;
  updatedBy: string;
}
