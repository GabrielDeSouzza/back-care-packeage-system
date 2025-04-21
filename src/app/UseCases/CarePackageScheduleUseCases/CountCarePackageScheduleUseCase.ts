import { Injectable } from '@nestjs/common';
import { CountCarePackageScheduleDTO } from 'src/domain/Entities/CarePackageSchedule/Dto/WhereCarePackageScheduleDto';
import { CarePackageScheduleRepository } from 'src/domain/Repositories/CarePackageScheduleRepository';

@Injectable()
export class CountCarePackageScheduleUseCase {
  constructor(
    private readonly carePackageScheduleRepository: CarePackageScheduleRepository,
  ) {}
  async execute(request?: CountCarePackageScheduleDTO): Promise<number> {
    return this.carePackageScheduleRepository.countCarePackageSchedules(
      request,
    );
  }
}
