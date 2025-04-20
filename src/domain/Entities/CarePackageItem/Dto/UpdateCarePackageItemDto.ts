import { CarePackageItemEntityProps } from '../CarePackageItemEntity';

export abstract class UpdateCarePackageItemDto
  implements
    Partial<Omit<CarePackageItemEntityProps, 'createdAt' | 'updatedAt'>>
{
  oldName: string;
  newName: string;
  updatedBy: string;
}
