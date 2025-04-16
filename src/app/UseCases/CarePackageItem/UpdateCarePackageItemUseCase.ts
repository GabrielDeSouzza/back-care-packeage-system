import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/UpdateCarePackageItemDto';
import { CarePackageItemRepository } from 'src/domain/Repositories/CarePackageItemRepository';

@Injectable()
export class UpdateCarePackageItemUseCase {
  constructor(private carePackageItemRepository: CarePackageItemRepository) {}

  async execute(data: UpdateCarePackageItemDto) {
    const carePackageItemExist =
      await this.carePackageItemRepository.getCarePackageItem({ id: data.id });
    if (!carePackageItemExist)
      throw new NotFoundException('Item não encontrado');

    if (data.name && carePackageItemExist.name !== data.name) {
      await this.isNameInUse(data.name);
    }
    const updatedItem =
      await this.carePackageItemRepository.updateCarePackageItem(data);
    return updatedItem;
  }
  private async isNameInUse(name: string): Promise<void> {
    const item = await this.carePackageItemRepository.getCarePackageItem({
      name,
    });
    if (item) {
      throw new ConflictException(`O nome ${name} já esta em uso`);
    }
  }
}
