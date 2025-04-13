import {
  Prisma,
  CarePackageItem as CarePackageItemPrisma,
} from '@prisma/client';
import { CarePackageItemEntity } from 'src/domain/Entities/CarePackageItem/CarePackageItemEntity';
import { CreateCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/CreateCarePackageItemDto';
import { UpdateCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/UpdateCarePackageItemDto';
export class CarePackageItemMapper {
  static prismaToEntity(data: CarePackageItemPrisma) {
    console.log('data', data);
    return new CarePackageItemEntity({
      createdAt: data.createdAt,
      createdBy: data.createdBy,
      id: data.id,
      name: data.name,
      updatedAt: data.updatedAt,
      updatedBy: data.updatedBy,
    });
  }
  static createCarePackageItemPrisma(data: CreateCarePackageItemDto) {
    const created: Prisma.CarePackageItemCreateInput = {
      createdAt: new Date(),
      CreatedBy: { connect: { id: data.createdBy } },
      name: data.name,
      updatedAt: new Date(),
      UpdatedBy: { connect: { id: data.updatedBy } },
      id: crypto.randomUUID(),
    };
    return created;
  }
  static updateCarePackageItemPrisma(data: UpdateCarePackageItemDto) {
    const updated: Prisma.CarePackageItemUpdateInput = {
      name: data?.name,
      updatedAt: new Date(),
      UpdatedBy: { connect: { id: data.updatedBy } },
    };
    return updated;
  }
}
