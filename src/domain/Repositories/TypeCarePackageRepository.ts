import { TypeCarePackageEntity } from '../Entities/TypeCarePackage/TypeCarePackageEntity';
import { CreateTypeCarePackageDto } from '../Entities/TypeCarePackage/Dto/CreateTypeCarePackageDto';
import { UpdateTypeCarePackageDto } from '../Entities/TypeCarePackage/Dto/UpdateTypeCarePackageDto';
import { GetTypeCarePackageDto } from '../Entities/TypeCarePackage/Dto/GetTypeCarePackageDto';
import {
  CountTypeCarePackageDTO,
  WhereTypeCarePackageRequestDTO,
} from '../Entities/TypeCarePackage/Dto/WhereTypeCarePackageDto';

export abstract class TypeCarePackageRepository {
  abstract countTypeCarePackages(
    request: CountTypeCarePackageDTO,
  ): Promise<number>;
  abstract createTypeCarePackage(
    data: CreateTypeCarePackageDto,
  ): Promise<TypeCarePackageEntity>;

  abstract updateTypeCarePackage(
    data: UpdateTypeCarePackageDto,
  ): Promise<TypeCarePackageEntity>;

  abstract getTypeCarePackage(
    request: GetTypeCarePackageDto,
  ): Promise<TypeCarePackageEntity>;
  abstract getAllTypeCarePackages(
    request?: WhereTypeCarePackageRequestDTO,
  ): Promise<TypeCarePackageEntity[]>;
}
