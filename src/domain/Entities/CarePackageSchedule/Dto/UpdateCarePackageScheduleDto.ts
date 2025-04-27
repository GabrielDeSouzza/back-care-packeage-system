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
  newDeliveryDate?: Date;
  oldDeliveryDate?: Date;
  carePackageCount?: number;
  updatedBy: string;
}
