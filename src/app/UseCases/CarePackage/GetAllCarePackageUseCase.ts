import { Injectable } from '@nestjs/common';
import { CarePackageEntity } from 'src/domain/Entities/CarePackage/CarePackageEntity';
import { WhereCarePackageRequestDTO } from 'src/domain/Entities/CarePackage/Dto/WhereCarePacakageDto';
import { CarePackageRepository } from 'src/domain/Repositories/CarePackageRepository';

@Injectable()
export class GetAllCarePackageUseCase {
  constructor(private readonly carePackageRepository: CarePackageRepository) {}
  async execute(
    request: WhereCarePackageRequestDTO,
  ): Promise<CarePackageEntity[]> {
    return this.carePackageRepository.getAllCarePackages(request);
  }
}
