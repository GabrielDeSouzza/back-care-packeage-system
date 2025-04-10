import { CarePackageItemEntity } from '../Entities/CarePackageItem/CarePackageItemEntity';
import { CreateCarePackageItemDto } from '../Entities/CarePackageItem/Dto/CreateCarePackageItemDto';
import { GetCarePackageItemDto } from '../Entities/CarePackageItem/Dto/GetCarePackageItem';
import { UpdateCarePackageItemDto } from '../Entities/CarePackageItem/Dto/UpdateCarePackageItemDto';

export abstract class CarePackageItemRepository {
  abstract createCarePackageItem(
    data: CreateCarePackageItemDto,
  ): Promise<CarePackageItemEntity>;
  abstract updateCarePackageItem(
    data: UpdateCarePackageItemDto,
  ): Promise<CarePackageItemEntity>;
  abstract getCarePackageItem(
    request: GetCarePackageItemDto,
  ): Promise<CarePackageItemEntity>;
}
