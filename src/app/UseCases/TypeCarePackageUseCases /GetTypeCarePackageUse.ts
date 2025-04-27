import { Injectable, NotFoundException } from '@nestjs/common';
import { TypeCarePackageEntity } from 'src/domain/Entities/TypeCarePackage/TypeCarePackageEntity';
import { GetTypeCarePackageDto } from 'src/domain/Entities/TypeCarePackage/Dto/GetTypeCarePackageDto';
import { TypeCarePackageRepository } from 'src/domain/Repositories/TypeCarePackageRepository';

@Injectable()
export class GetTypeCarePackageUseCase {
  constructor(private typeCarePackageRepository: TypeCarePackageRepository) {}

  async execute(
    request: GetTypeCarePackageDto,
  ): Promise<TypeCarePackageEntity> {
    const typeCarePackage =
      await this.typeCarePackageRepository.getTypeCarePackage(request);
    this.ensureNameExists(typeCarePackage);
    return typeCarePackage;
  }

  private ensureNameExists(
    typeCarePackage: TypeCarePackageEntity | null,
  ): void {
    if (!typeCarePackage) {
      throw new NotFoundException('Tipo não encontrado');
    }
  }
}
