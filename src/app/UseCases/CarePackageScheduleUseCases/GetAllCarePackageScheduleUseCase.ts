import { Injectable } from '@nestjs/common';
import { CarePackageScheduleEntity } from 'src/domain/Entities/CarePackageSchedule/CarePackageScheduleEntity';
import { WhereCarePackageScheduleRequestDTO } from 'src/domain/Entities/CarePackageSchedule/Dto/WhereCarePackageScheduleDto';
import { CarePackageScheduleRepository } from 'src/domain/Repositories/CarePackageScheduleRepository';

@Injectable()
export class GetAllCarePackageScheduleUseCase {
  constructor(
    private readonly carePackageScheduleRepository: CarePackageScheduleRepository,
  ) {}
  async execute(
    request?: WhereCarePackageScheduleRequestDTO,
  ): Promise<CarePackageScheduleEntity[]> {
    return this.carePackageScheduleRepository.getAllCarePackageSchedules(
      request,
    );
  }
}
