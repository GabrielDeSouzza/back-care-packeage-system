import { Injectable } from '@nestjs/common';
import { TypeCarePackageEntity } from 'src/domain/Entities/TypeCarePackage/TypeCarePackageEntity';
import { WhereTypeCarePackageRequestDTO } from 'src/domain/Entities/TypeCarePackage/Dto/WhereTypeCarePackageDto';
import { TypeCarePackageRepository } from 'src/domain/Repositories/TypeCarePackageRepository';

@Injectable()
export class GetAllTypeCarePackageUseCase {
  constructor(
    private readonly typeCarePackageRepository: TypeCarePackageRepository,
  ) {}
  async execute(
    request?: WhereTypeCarePackageRequestDTO,
  ): Promise<TypeCarePackageEntity[]> {
    return this.typeCarePackageRepository.getAllTypeCarePackages(request);
  }
}
