import { BadRequestException } from '@nestjs/common';
import { CarePackageItemEntity } from 'src/domain/Entities/CarePackageItem/CarePackageItemEntity';
import { CreateCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/CreateCarePackageItemDto';
import { CarePackageItemRepository } from 'src/domain/Repositories/CarePackageItemRepository';

export class CreateCarePackageItemUseCase {
  constructor(private carePackageItemRepository: CarePackageItemRepository) {}

  async execute(
    data: CreateCarePackageItemDto,
  ): Promise<CarePackageItemEntity> {
    const itemNameInUse =
      await this.carePackageItemRepository.getCarePackageItem({
        name: data.name,
      });

    if (itemNameInUse.name === data.name)
      throw new BadRequestException(`Nome ${data.name} Já esta em uso`);

    return this.carePackageItemRepository.createCarePackageItem(data);
  }
}
