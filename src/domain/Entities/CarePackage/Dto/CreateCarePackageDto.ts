import { CarePackageEntityProps } from '../CarePackageEntity';

export abstract class CreateCarePackageDto
  implements
    Omit<
      CarePackageEntityProps,
      'id' | 'createdAt' | 'updatedAt' | 'numberControl'
    >
{
  typeCarePackageId: string;
  personId: string;
  carePackageScheduleId: string;
  createdBy: string;
  updatedBy: string;
}
