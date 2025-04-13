import { ConflictException, Injectable } from '@nestjs/common';
import { CarePackageItemEntity } from 'src/domain/Entities/CarePackageItem/CarePackageItemEntity';
import { CreateCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/CreateCarePackageItemDto';
import { CarePackageItemRepository } from 'src/domain/Repositories/CarePackageItemRepository';

@Injectable()
export class CreateCarePackageItemUseCase {
  constructor(private carePackageItemRepository: CarePackageItemRepository) {}

  async execute(
    data: CreateCarePackageItemDto,
  ): Promise<CarePackageItemEntity> {
    await this.verifyNameInUse(data.name);

    return this.carePackageItemRepository.createCarePackageItem(data);
  }
  private async verifyNameInUse(nameToVerify: string) {
    const itemNameInUse =
      await this.carePackageItemRepository.getCarePackageItem({
        name: nameToVerify,
      });
    if (itemNameInUse)
      throw new ConflictException(`O nome ${nameToVerify} já esta em uso`);
  }
}
