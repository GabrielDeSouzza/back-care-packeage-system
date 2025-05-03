import { Injectable, NotFoundException } from '@nestjs/common';
import { CarePackageEntity } from 'src/domain/Entities/CarePackage/CarePackageEntity';
import { GetCarePackageDto } from 'src/domain/Entities/CarePackage/Dto/GetCarePackareDto';
import { CarePackageRepository } from 'src/domain/Repositories/CarePackageRepository';

@Injectable()
export class GetCarePackageUseCase {
  constructor(private carePackageRepository: CarePackageRepository) {}

  async execute(request: GetCarePackageDto): Promise<CarePackageEntity> {
    const carePackage =
      await this.carePackageRepository.getCarePackage(request);
    await this.carePackageExist(carePackage);
    return carePackage;
  }

  private carePackageExist(carePackage: CarePackageEntity): void {
    if (!carePackage) {
      throw new NotFoundException('Numero de controle não encontrado');
    }
  }
}
