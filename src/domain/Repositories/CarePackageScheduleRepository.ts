import { CarePackageScheduleEntity } from '../Entities/CarePackageSchedule/CarePackageScheduleEntity';
import { CreateCarePackageScheduleDto } from '../Entities/CarePackageSchedule/Dto/CreateCarePackageScheduleDto';
import { UpdateCarePackageScheduleDto } from '../Entities/CarePackageSchedule/Dto/UpdateCarePackageScheduleDto';
import { GetCarePackageScheduleDto } from '../Entities/CarePackageSchedule/Dto/GetCarePackageScheduleDto';
import {
  CountCarePackageScheduleDTO,
  WhereCarePackageScheduleRequestDTO,
} from '../Entities/CarePackageSchedule/Dto/WhereCarePackageScheduleDto';

export abstract class CarePackageScheduleRepository {
  abstract countCarePackageSchedules(
    request?: CountCarePackageScheduleDTO,
  ): Promise<number>;
  abstract createCarePackageSchedule(
    data: CreateCarePackageScheduleDto,
  ): Promise<CarePackageScheduleEntity>;

  abstract updateCarePackageSchedule(
    data: UpdateCarePackageScheduleDto,
  ): Promise<CarePackageScheduleEntity>;

  abstract getCarePackageSchedule(
    request: GetCarePackageScheduleDto,
  ): Promise<CarePackageScheduleEntity>;
  abstract getAllCarePackageSchedules(
    request?: WhereCarePackageScheduleRequestDTO,
  ): Promise<CarePackageScheduleEntity[]>;
}
