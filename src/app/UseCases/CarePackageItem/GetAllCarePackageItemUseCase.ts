import { Injectable } from '@nestjs/common';
import { CarePackageItemEntity } from 'src/domain/Entities/CarePackageItem/CarePackageItemEntity';
import { WhereCarePackageItemRequestDTO } from 'src/domain/Entities/CarePackageItem/Dto/WhereCarePacakageItemDto';
import { CarePackageItemRepository } from 'src/domain/Repositories/CarePackageItemRepository';

@Injectable()
export class GetAllCarePackageItemUseCase {
  constructor(
    private readonly carePackageItemRepository: CarePackageItemRepository,
  ) {}
  async execute(
    request: WhereCarePackageItemRequestDTO,
  ): Promise<CarePackageItemEntity[]> {
    return this.carePackageItemRepository.getAllCarePackageItems(request);
  }
}
