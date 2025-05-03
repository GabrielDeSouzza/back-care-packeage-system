import { CarePackageEntityProps } from '../CarePackageEntity';

export abstract class UpdateCarePackageDto
  implements
    Partial<
      Omit<
        CarePackageEntityProps,
        'createdAt' | 'updatedAt' | 'createdBy' | ' numberControl'
      >
    >
{
  numberControl: number;
  typeCarePackageId?: string;
  personId?: string;
  carePackageScheduleId?: string;
  updatedBy: string;
}
