import { CreateCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/CreateCarePackageItemDto';
import { PrismaService } from '../prismaService';
import { CarePackageItemMapper } from '../mappers/CarePackageItemMapper/CarePackageItemMapper';
import { CarePackageItemRepository } from 'src/domain/Repositories/CarePackageItemRepository';
import { CarePackageItemEntity } from 'src/domain/Entities/CarePackageItem/CarePackageItemEntity';
import { GetCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/GetCarePackageItem';
import { UpdateCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/UpdateCarePackageItemDto';

export class CarePackageItemPrismaServiceRepository
  implements CarePackageItemRepository
{
  constructor(private readonly prisma: PrismaService) {}
  async createCarePackageItem(data: CreateCarePackageItemDto) {
    const carePackageItemData =
      CarePackageItemMapper.createCarePackageItemPrisma(data);

    return CarePackageItemMapper.prismaToEntity(
      await this.prisma.carePackageItem.create({
        data: carePackageItemData,
      }),
    );
  }
  async updateCarePackageItem(
    data: UpdateCarePackageItemDto,
  ): Promise<CarePackageItemEntity> {
    const carePackageItemData =
      CarePackageItemMapper.updateCarePackageItemPrisma(data);
    return CarePackageItemMapper.prismaToEntity(
      await this.prisma.carePackageItem.update({
        where: { id: data.id },
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
    return CarePackageItemMapper.prismaToEntity(data);
  }
}
