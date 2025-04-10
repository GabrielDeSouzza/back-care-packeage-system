import { CarePackageScheduleEntityProps } from '../CarePackageScheduleEntity';

export abstract class CreateCarePackageScheduleDto
  implements Omit<CarePackageScheduleEntityProps, 'id'>
{
  deliveryDate: Date;
  carePackageCount: number;
}
