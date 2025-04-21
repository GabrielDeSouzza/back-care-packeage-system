import { CarePackageItemEntity } from '../Entities/CarePackageItem/CarePackageItemEntity';
import { CreateCarePackageItemDto } from '../Entities/CarePackageItem/Dto/CreateCarePackageItemDto';
import { GetCarePackageItemDto } from '../Entities/CarePackageItem/Dto/GetCarePackageItem';
import { UpdateCarePackageItemDto } from '../Entities/CarePackageItem/Dto/UpdateCarePackageItemDto';
import {
  CountCarePackageItemDTO,
  WhereCarePackageItemRequestDTO,
} from '../Entities/CarePackageItem/Dto/WhereCarePacakageItemDto';

export abstract class CarePackageItemRepository {
  abstract countCarePackageItems(
    request: CountCarePackageItemDTO,
  ): Promise<number>;
  abstract createCarePackageItem(
    data: CreateCarePackageItemDto,
  ): Promise<CarePackageItemEntity>;
  abstract updateCarePackageItem(
    data: UpdateCarePackageItemDto,
  ): Promise<CarePackageItemEntity>;
  abstract getCarePackageItem(
    request: GetCarePackageItemDto,
  ): Promise<CarePackageItemEntity>;
  abstract getAllCarePackageItems(
    request: WhereCarePackageItemRequestDTO,
  ): Promise<CarePackageItemEntity[]>;
}
