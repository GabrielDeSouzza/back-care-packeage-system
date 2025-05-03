import { Injectable } from '@nestjs/common';
import { CountCarePackageDTO } from 'src/domain/Entities/CarePackage/Dto/WhereCarePacakageDto';
import { CarePackageRepository } from 'src/domain/Repositories/CarePackageRepository';

@Injectable()
export class CountCarePackageUseCase {
  constructor(private readonly carePackageRepository: CarePackageRepository) {}
  async execute(request: CountCarePackageDTO): Promise<number> {
    return this.carePackageRepository.countCarePackages(request);
  }
}
