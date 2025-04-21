import { CreateCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/CreateCarePackageItemDto';
import { PrismaService } from '../prismaService';
import { CarePackageItemMapper } from '../mappers/CarePackageItemMapper/CarePackageItemMapper';
import { CarePackageItemRepository } from 'src/domain/Repositories/CarePackageItemRepository';
import { CarePackageItemEntity } from 'src/domain/Entities/CarePackageItem/CarePackageItemEntity';
import { GetCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/GetCarePackageItem';
import { UpdateCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/UpdateCarePackageItemDto';
import { Injectable } from '@nestjs/common';
import {
  CountCarePackageItemDTO,
  WhereCarePackageItemRequestDTO,
} from 'src/domain/Entities/CarePackageItem/Dto/WhereCarePacakageItemDto';

@Injectable()
export class CarePackageItemPrismaServiceRepository
  implements CarePackageItemRepository
{
  constructor(private prisma: PrismaService) {}
  async countCarePackageItems(
    request: CountCarePackageItemDTO,
  ): Promise<number> {
    return this.prisma.carePackageItem.count(request);
  }
  async getAllCarePackageItems(
    request: WhereCarePackageItemRequestDTO,
  ): Promise<CarePackageItemEntity[]> {
    const data = await this.prisma.carePackageItem.findMany({
      where: request.where,
      take: request.limit,
      skip: request.offset,
    });
    return data.map((item) => CarePackageItemMapper.prismaToEntity(item));
  }
  async createCarePackageItem(data: CreateCarePackageItemDto) {
    const carePackageItemData =
      CarePackageItemMapper.createCarePackageItemPrisma(data);
    const dataPrisma = await this.prisma.carePackageItem.create({
      data: carePackageItemData,
    });
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
