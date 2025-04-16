import { Injectable, NotFoundException } from '@nestjs/common';
import { CarePackageItemEntity } from 'src/domain/Entities/CarePackageItem/CarePackageItemEntity';
import { GetCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/GetCarePackageItem';
import { CarePackageItemRepository } from 'src/domain/Repositories/CarePackageItemRepository';

@Injectable()
export class GetCarePackageItemUseCase {
  constructor(private carePackageItemRepository: CarePackageItemRepository) {}

  async execute(
    request: GetCarePackageItemDto,
  ): Promise<CarePackageItemEntity> {
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
