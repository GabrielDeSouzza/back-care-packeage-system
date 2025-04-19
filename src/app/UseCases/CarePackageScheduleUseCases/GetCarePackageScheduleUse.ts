import { Injectable, NotFoundException } from '@nestjs/common';
import { CarePackageScheduleEntity } from 'src/domain/Entities/CarePackageSchedule/CarePackageScheduleEntity';
import { GetCarePackageScheduleDto } from 'src/domain/Entities/CarePackageSchedule/Dto/GetCarePackageScheduleDto';
import { CarePackageScheduleRepository } from 'src/domain/Repositories/CarePackageScheduleRepository';

@Injectable()
export class GetCarePackageScheduleUseCase {
  constructor(
    private carePackageScheduleRepository: CarePackageScheduleRepository,
  ) {}

  async execute(
    request: GetCarePackageScheduleDto,
  ): Promise<CarePackageScheduleEntity> {
    const carePackageSchedule =
      await this.carePackageScheduleRepository.getCarePackageSchedule(request);
    this.ensureItemExists(carePackageSchedule);
    return carePackageSchedule;
  }

  private ensureItemExists(
    carePackageSchedule: CarePackageScheduleEntity | null,
  ): void {
    if (!carePackageSchedule) {
      throw new NotFoundException('Data não encontrada');
    }
  }
}
