import { ConflictException, Injectable } from '@nestjs/common';
import { CreateTypeCarePackageDto } from 'src/domain/Entities/TypeCarePackage/Dto/CreateTypeCarePackageDto';
import { TypeCarePackageEntity } from 'src/domain/Entities/TypeCarePackage/TypeCarePackageEntity';
import { TypeCarePackageRepository } from 'src/domain/Repositories/TypeCarePackageRepository';
import { GetAllCarePackageItemUseCase } from '../CarePackageItem/GetAllCarePackageItemUseCase';

@Injectable()
export class CreateTypeCarePackageUseCase {
  constructor(
    private readonly typeCarePackageRepository: TypeCarePackageRepository,
    private readonly getAllCarePackageItemUseCase: GetAllCarePackageItemUseCase,
  ) {}

  async execute(
    data: CreateTypeCarePackageDto,
  ): Promise<TypeCarePackageEntity> {
    await this.verifyNameInUse(data.name);
    await this.verifyItemsNameExist(data.itensName);
    return this.typeCarePackageRepository.createTypeCarePackage(data);
  }

  private async verifyNameInUse(name: string): Promise<void> {
    const existingPackage =
      await this.typeCarePackageRepository.getTypeCarePackage({ name });

    if (existingPackage) {
      throw new ConflictException(`O nome ${name} já está em uso`);
    }
  }

  private async verifyItemsNameExist(names: string[]): Promise<void> {
    const items = await this.getAllCarePackageItemUseCase.execute({
      where: {
        name: {
          in: names,
        },
      },
      limit: 1000,
      offset: 0,
    });

    const existingNames = new Set(items.map((item) => item.name));
    const itemsNotFound = names.filter((name) => !existingNames.has(name));

    if (itemsNotFound.length > 0) {
      throw new ConflictException(
        `Os itens ${itemsNotFound.join(', ')} não existem`,
      );
    }
  }
}
