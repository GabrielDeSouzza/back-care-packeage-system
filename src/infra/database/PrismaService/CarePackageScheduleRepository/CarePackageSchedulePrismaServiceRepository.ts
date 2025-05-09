import { CreateCarePackageScheduleDto } from 'src/domain/Entities/CarePackageSchedule/Dto/CreateCarePackageScheduleDto';
import { PrismaService } from '../prismaService';
import { CarePackageScheduleMapper } from '../mappers/CarePackageScheduleMapper/CarePackageScheduleMapper';
import { CarePackageScheduleRepository } from 'src/domain/Repositories/CarePackageScheduleRepository';
import { CarePackageScheduleEntity } from 'src/domain/Entities/CarePackageSchedule/CarePackageScheduleEntity';
import { UpdateCarePackageScheduleDto } from 'src/domain/Entities/CarePackageSchedule/Dto/UpdateCarePackageScheduleDto';
import { Injectable } from '@nestjs/common';
import { GetCarePackageScheduleDto } from 'src/domain/Entities/CarePackageSchedule/Dto/GetCarePackageScheduleDto';
import {
  CountCarePackageScheduleDTO,
  WhereCarePackageScheduleRequestDTO,
} from 'src/domain/Entities/CarePackageSchedule/Dto/WhereCarePackageScheduleDto';

@Injectable()
export class CarePackageSchedulePrismaServiceRepository
  implements CarePackageScheduleRepository
{
  constructor(private prisma: PrismaService) {}
  async countCarePackageSchedules(
    request: CountCarePackageScheduleDTO,
  ): Promise<number> {
    return this.prisma.carePackageSchedule.count(request);
  }
  async getAllCarePackageSchedules(
    request: WhereCarePackageScheduleRequestDTO,
  ): Promise<CarePackageScheduleEntity[]> {
    const data = await this.prisma.carePackageSchedule.findMany({
      where: request.where,
      take: request.limit,
      skip: request.offset,
    });
    return data.map((item) => CarePackageScheduleMapper.prismaToEntity(item));
  }
  async createCarePackageSchedule(data: CreateCarePackageScheduleDto) {
    const carePackageScheduleData =
      CarePackageScheduleMapper.createCarePackageSchedulePrisma(data);
    const dataPrisma = await this.prisma.carePackageSchedule.create({
      data: carePackageScheduleData,
    });
    return CarePackageScheduleMapper.prismaToEntity(dataPrisma);
  }
  async updateCarePackageSchedule(
    data: UpdateCarePackageScheduleDto,
  ): Promise<CarePackageScheduleEntity> {
    const carePackageScheduleData =
      CarePackageScheduleMapper.updateCarePackageSchedulePrisma(data);
    return CarePackageScheduleMapper.prismaToEntity(
      await this.prisma.carePackageSchedule.update({
        where: { deliveryDate: data.oldDeliveryDate },
        data: carePackageScheduleData,
      }),
    );
  }
  async getCarePackageSchedule(
    request: GetCarePackageScheduleDto,
  ): Promise<CarePackageScheduleEntity> {
    const data = await this.prisma.carePackageSchedule.findFirst({
      where: {
        OR: [{ id: request.id }, { deliveryDate: request.deliveryDate }],
      },
    });
    return data ? CarePackageScheduleMapper.prismaToEntity(data) : undefined;
  }
}
