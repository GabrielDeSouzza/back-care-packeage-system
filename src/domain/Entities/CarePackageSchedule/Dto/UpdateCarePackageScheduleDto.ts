import { CarePackageScheduleEntityProps } from '../CarePackageScheduleEntity';

export abstract class UpdateCarePackageScheduleDto
  implements
    Partial<
      Omit<
        CarePackageScheduleEntityProps,
        'createdAt' | 'updatedAt' | 'createdBy'
      >
    >
{
  id: string;
  deliveryDate?: Date;
  carePackageCount?: number;
  updatedBy: string;
}
