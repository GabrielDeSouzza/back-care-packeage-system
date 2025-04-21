import { Injectable } from '@nestjs/common';
import { CountCarePackageItemDTO } from 'src/domain/Entities/CarePackageItem/Dto/WhereCarePacakageItemDto';
import { CarePackageItemRepository } from 'src/domain/Repositories/CarePackageItemRepository';

@Injectable()
export class CountCarePackageItemUseCase {
  constructor(
    private readonly carePackageItemRepository: CarePackageItemRepository,
  ) {}
  async execute(request: CountCarePackageItemDTO): Promise<number> {
    return this.carePackageItemRepository.countCarePackageItems(request);
  }
}
