import { CarePackageEntity } from '../Entities/CarePackage/CarePackageEntity';
import { CreateCarePackageDto } from '../Entities/CarePackage/Dto/CreateCarePackageDto';
import { GetCarePackageDto } from '../Entities/CarePackage/Dto/GetCarePackareDto';
import { UpdateCarePackageDto } from '../Entities/CarePackage/Dto/UpdateCaePackageDto';
import {
  CountCarePackageDTO,
  WhereCarePackageRequestDTO,
} from '../Entities/CarePackage/Dto/WhereCarePacakageDto';

export abstract class CarePackageRepository {
  abstract countCarePackages(request: CountCarePackageDTO): Promise<number>;
  abstract getAllCarePackages(
    request: WhereCarePackageRequestDTO,
  ): Promise<CarePackageEntity[]>;
  abstract createCarePackage(
    data: CreateCarePackageDto,
  ): Promise<CarePackageEntity>;
  abstract updateCarePackage(
    data: UpdateCarePackageDto,
  ): Promise<CarePackageEntity>;
  abstract getCarePackage(
    request: GetCarePackageDto,
  ): Promise<CarePackageEntity>;
}
