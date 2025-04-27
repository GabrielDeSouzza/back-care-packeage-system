import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateCarePackageScheduleDto } from 'src/domain/Entities/CarePackageSchedule/Dto/UpdateCarePackageScheduleDto';
import { CarePackageScheduleRepository } from 'src/domain/Repositories/CarePackageScheduleRepository';

@Injectable()
export class UpdateCarePackageScheduleUseCase {
  constructor(
    private carePackageScheduleRepository: CarePackageScheduleRepository,
  ) {}

  async execute(data: UpdateCarePackageScheduleDto) {
    const carePackageScheduleExist =
      await this.carePackageScheduleRepository.getCarePackageSchedule({
        deliveryDate: data.oldDeliveryDate,
      });
    if (!carePackageScheduleExist)
      throw new NotFoundException('Data não encontrada');

    if (
      data.newDeliveryDate &&
      carePackageScheduleExist.deliveryDate !== data.oldDeliveryDate
    ) {
      await this.isDateInUse(data.newDeliveryDate);
    }
    const updatedItem =
      await this.carePackageScheduleRepository.updateCarePackageSchedule(data);
    return updatedItem;
  }
  private async isDateInUse(deliveryDate: Date): Promise<void> {
    const item =
      await this.carePackageScheduleRepository.getCarePackageSchedule({
        deliveryDate,
      });
    if (item) {
      throw new ConflictException(
        `O data ${deliveryDate.toLocaleDateString('pt-Br')} já esta em uso`,
      );
    }
  }
}
