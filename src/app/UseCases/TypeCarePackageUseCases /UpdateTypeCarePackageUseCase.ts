import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateTypeCarePackageDto } from 'src/domain/Entities/TypeCarePackage/Dto/UpdateTypeCarePackageDto';
import { TypeCarePackageRepository } from 'src/domain/Repositories/TypeCarePackageRepository';
import { GetAllCarePackageItemUseCase } from '../CarePackageItem/GetAllCarePackageItemUseCase';

@Injectable()
export class UpdateTypeCarePackageUseCase {
  constructor(
    private typeCarePackageRepository: TypeCarePackageRepository,
    private getAllcarePackageItemUseCase: GetAllCarePackageItemUseCase,
  ) {}

  async execute(data: UpdateTypeCarePackageDto) {
    const typeCarePackageExist =
      await this.typeCarePackageRepository.getTypeCarePackage({
        name: data.oldName,
      });
    if (!typeCarePackageExist)
      throw new NotFoundException('Tipo não encontrado');

    if (data.newName && typeCarePackageExist.name !== data.oldName) {
      await this.verifyNameInUse(data.newName);
    }

    if (data.itensName) {
      await this.verifyItensNameExist(data.itensName);
    }
    const updatedItem =
      await this.typeCarePackageRepository.updateTypeCarePackage(data);
    return updatedItem;
  }
  private async verifyNameInUse(name: string) {
    const itemNameInUse =
      await this.typeCarePackageRepository.getTypeCarePackage({
        name: name,
      });
    if (itemNameInUse)
      throw new ConflictException(`O nome ${name} já esta em uso`);
  }

  private async verifyItensNameExist(names: string[]) {
    const itens = await this.getAllcarePackageItemUseCase.execute({
      where: {
        name: {
          in: names,
        },
      },
      limit: 1000,
      offset: 0,
    });

    const existingNames = new Set(itens.map((item) => item.name));
    const itensNotExists = names.filter((name) => !existingNames.has(name));

    if (itensNotExists.length > 0) {
      throw new ConflictException(
        `Os itens ${itensNotExists.join(', ')} não existem`,
      );
    }
  }
}
