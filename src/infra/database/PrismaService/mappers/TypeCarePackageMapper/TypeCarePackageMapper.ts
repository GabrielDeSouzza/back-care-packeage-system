import {
  Prisma,
  TypeCarePackage as TypeCarePackagePrisma,
} from '@prisma/client';
import { TypeCarePackageEntity } from 'src/domain/Entities/TypeCarePackage/TypeCarePackageEntity';
import { CreateTypeCarePackageDto } from 'src/domain/Entities/TypeCarePackage/Dto/CreateTypeCarePackageDto';
import { UpdateTypeCarePackageDto } from 'src/domain/Entities/TypeCarePackage/Dto/UpdateTypeCarePackageDto';
export class TypeCarePackageMapper {
  static prismaToEntity(data: TypeCarePackagePrisma, itensName?: string[]) {
    return new TypeCarePackageEntity({
      createdAt: data.createdAt,
      createdBy: data.createdBy,
      id: data.id,
      name: data.name,
      updatedAt: data.updatedAt,
      updatedBy: data.updatedBy,
      itensName: itensName,
    });
  }
  static createTypeCarePackagePrisma(data: CreateTypeCarePackageDto) {
    const created: Prisma.TypeCarePackageCreateInput = {
      createdAt: new Date(),
      CreatedBy: { connect: { id: data.createdBy } },
      name: data.name,
      updatedAt: new Date(),
      UpdatedBy: { connect: { id: data.updatedBy } },
      id: crypto.randomUUID(),
      CarePackageItem: {
        connect: data.itensName.map((item) => ({ name: item })),
      },
    };
    return created;
  }
  static updateTypeCarePackagePrisma(data: UpdateTypeCarePackageDto) {
    const updated: Prisma.TypeCarePackageUpdateInput = {
      name: data?.newName,
      updatedAt: new Date(),
      UpdatedBy: { connect: { id: data.updatedBy } },
      CarePackageItem: {
        connect: data.itensName.map((item) => ({ name: item })),
        disconnect: data.deletedItensName.map((item) => ({ name: item })),
      },
    };
    return updated;
  }
}
