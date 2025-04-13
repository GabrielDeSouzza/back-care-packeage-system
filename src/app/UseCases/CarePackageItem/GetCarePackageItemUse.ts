import { NotFoundException } from '@nestjs/common';
import { GetCarePackageDto } from 'src/domain/Entities/CarePackage/Dto/GetCarePackareDto';
import { CarePackageItemEntity } from 'src/domain/Entities/CarePackageItem/CarePackageItemEntity';
import { CarePackageItemRepository } from 'src/domain/Repositories/CarePackageItemRepository';

export class GetCarePackageItemUseCase {
  constructor(private carePackageItemRepository: CarePackageItemRepository) {}

  async execute(request: GetCarePackageDto): Promise<CarePackageItemEntity> {
    const carePackageItem =
      await this.carePackageItemRepository.getCarePackageItem(request);
    this.ensureItemExists(carePackageItem);
    return carePackageItem;
  }

  private ensureItemExists(item: CarePackageItemEntity | null): void {
    if (!item) {
      throw new NotFoundException('Item não encontrado');
    }
  }
}
