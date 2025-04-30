import { CreateTypeCarePackageDto } from 'src/domain/Entities/TypeCarePackage/Dto/CreateTypeCarePackageDto';
import { PrismaService } from '../prismaService';
import { TypeCarePackageRepository } from 'src/domain/Repositories/TypeCarePackageRepository';
import { TypeCarePackageEntity } from 'src/domain/Entities/TypeCarePackage/TypeCarePackageEntity';
import { UpdateTypeCarePackageDto } from 'src/domain/Entities/TypeCarePackage/Dto/UpdateTypeCarePackageDto';
import { Injectable } from '@nestjs/common';
import { GetTypeCarePackageDto } from 'src/domain/Entities/TypeCarePackage/Dto/GetTypeCarePackageDto';
import {
  CountTypeCarePackageDTO,
  WhereTypeCarePackageRequestDTO,
} from 'src/domain/Entities/TypeCarePackage/Dto/WhereTypeCarePackageDto';
import { TypeCarePackageMapper } from '../mappers/TypeCarePackageMapper/TypeCarePackageMapper';

@Injectable()
export class TypeCarePackagePrismaServiceRepository
  implements TypeCarePackageRepository
{
  constructor(private prisma: PrismaService) {}
  async countTypeCarePackages(
    request: CountTypeCarePackageDTO,
  ): Promise<number> {
    return this.prisma.typeCarePackage.count(request);
  }
  async getAllTypeCarePackages(
    request: WhereTypeCarePackageRequestDTO,
  ): Promise<TypeCarePackageEntity[]> {
    const data = await this.prisma.typeCarePackage.findMany({
      where: request.where,
      take: request.limit,
      skip: request.offset,
      include: {
        CarePackageItem: {
          select: {
            name: true,
          },
        },
      },
    });
    return data.map((typeCarePackage) =>
      TypeCarePackageMapper.prismaToEntity(
        typeCarePackage,
        typeCarePackage.CarePackageItem.map((item) => item.name),
      ),
    );
  }
  async createTypeCarePackage(data: CreateTypeCarePackageDto) {
    const typeCarePackageData =
      TypeCarePackageMapper.createTypeCarePackagePrisma(data);
    const dataPrisma = await this.prisma.typeCarePackage.create({
      data: typeCarePackageData,
      include: {
        CarePackageItem: {
          select: {
            name: true,
          },
        },
      },
    });
    return TypeCarePackageMapper.prismaToEntity(
      dataPrisma,
      dataPrisma.CarePackageItem.map((item) => item.name),
    );
  }
  async updateTypeCarePackage(
    data: UpdateTypeCarePackageDto,
  ): Promise<TypeCarePackageEntity> {
    const typeCarePackageData =
      TypeCarePackageMapper.updateTypeCarePackagePrisma(data);
    const dataPrisma = await this.prisma.typeCarePackage.update({
      where: { name: data.oldName },
      data: typeCarePackageData,
      include: {
        CarePackageItem: {
          select: {
            name: true,
          },
        },
      },
    });
    return TypeCarePackageMapper.prismaToEntity(
      dataPrisma,
      dataPrisma.CarePackageItem.map((item) => item.name),
    );
  }
  async getTypeCarePackage(
    request: GetTypeCarePackageDto,
  ): Promise<TypeCarePackageEntity> {
    const data = await this.prisma.typeCarePackage.findFirst({
      where: {
        OR: [{ id: request.id }, { name: request.name }],
      },
      include: {
        CarePackageItem: {
          select: {
            name: true,
          },
        },
      },
    });
    return data
      ? TypeCarePackageMapper.prismaToEntity(
          data,
          data.CarePackageItem.map((item) => item.name),
        )
      : undefined;
  }
}
