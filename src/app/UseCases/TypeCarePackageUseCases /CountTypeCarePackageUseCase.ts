import { Injectable } from '@nestjs/common';
import { CountTypeCarePackageDTO } from 'src/domain/Entities/TypeCarePackage/Dto/WhereTypeCarePackageDto';
import { TypeCarePackageRepository } from 'src/domain/Repositories/TypeCarePackageRepository';

@Injectable()
export class CountTypeCarePackageUseCase {
  constructor(
    private readonly careTypePackageRepository: TypeCarePackageRepository,
  ) {}
  async execute(request?: CountTypeCarePackageDTO): Promise<number> {
    return this.careTypePackageRepository.countTypeCarePackages(request);
  }
}
