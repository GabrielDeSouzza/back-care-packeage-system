import { ConflictException, Injectable } from '@nestjs/common';
import { CarePackageScheduleEntity } from 'src/domain/Entities/CarePackageSchedule/CarePackageScheduleEntity';
import { CreateCarePackageScheduleDto } from 'src/domain/Entities/CarePackageSchedule/Dto/CreateCarePackageScheduleDto';
import { CarePackageScheduleRepository } from 'src/domain/Repositories/CarePackageScheduleRepository';

@Injectable()
export class CreateCarePackageScheduleUseCase {
  constructor(
    private carePackageScheduleRepository: CarePackageScheduleRepository,
  ) {}

  async execute(
    data: CreateCarePackageScheduleDto,
  ): Promise<CarePackageScheduleEntity> {
    await this.verifyDateInUse(data.deliveryDate);

    return this.carePackageScheduleRepository.createCarePackageSchedule(data);
  }
  private async verifyDateInUse(dateToverify: Date) {
    const itemNameInUse =
      await this.carePackageScheduleRepository.getCarePackageSchedule({
        deliveryDate: dateToverify,
      });
    if (itemNameInUse)
      throw new ConflictException(
        `A Data ${dateToverify.toLocaleDateString('pt-br')} já esta em uso`,
      );
  }
}
