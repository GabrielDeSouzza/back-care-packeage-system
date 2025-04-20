import { CreateCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/CreateCarePackageItemDto';
import { PrismaService } from '../prismaService';
import { CarePackageItemMapper } from '../mappers/CarePackageItemMapper/CarePackageItemMapper';
import { CarePackageItemRepository } from 'src/domain/Repositories/CarePackageItemRepository';
import { CarePackageItemEntity } from 'src/domain/Entities/CarePackageItem/CarePackageItemEntity';
import { GetCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/GetCarePackageItem';
import { UpdateCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/UpdateCarePackageItemDto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarePackageItemPrismaServiceRepository
  implements CarePackageItemRepository
{
  constructor(private prisma: PrismaService) {}
  async createCarePackageItem(data: CreateCarePackageItemDto) {
    console.log('WSES', data);
    const carePackageItemData =
      CarePackageItemMapper.createCarePackageItemPrisma(data);
    const dataPrisma = await this.prisma.carePackageItem.create({
      data: carePackageItemData,
    });
    console.log('dataPrisma', dataPrisma);
    return CarePackageItemMapper.prismaToEntity(dataPrisma);
  }
  async updateCarePackageItem(
    data: UpdateCarePackageItemDto,
  ): Promise<CarePackageItemEntity> {
    const carePackageItemData =
      CarePackageItemMapper.updateCarePackageItemPrisma(data);
    return CarePackageItemMapper.prismaToEntity(
      await this.prisma.carePackageItem.update({
        where: { name: data.oldName },
        data: carePackageItemData,
      }),
    );
  }
  async getCarePackageItem(
    request: GetCarePackageItemDto,
  ): Promise<CarePackageItemEntity> {
    const data = await this.prisma.carePackageItem.findFirst({
      where: {
        OR: [{ id: request.id }, { name: request.name }],
      },
    });
    return data ? CarePackageItemMapper.prismaToEntity(data) : undefined;
  }
}
