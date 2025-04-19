import {
  Prisma,
  CarePackageSchedule as CarePackageSchedulePrisma,
} from '@prisma/client';
import { CarePackageScheduleEntity } from 'src/domain/Entities/CarePackageSchedule/CarePackageScheduleEntity';
import { CreateCarePackageScheduleDto } from 'src/domain/Entities/CarePackageSchedule/Dto/CreateCarePackageScheduleDto';
import { UpdateCarePackageScheduleDto } from 'src/domain/Entities/CarePackageSchedule/Dto/UpdateCarePackageScheduleDto';
export class CarePackageScheduleMapper {
  static prismaToEntity(data: CarePackageSchedulePrisma) {
    console.log('data', data);
    return new CarePackageScheduleEntity({
      id: data.id,
      carePackageCount: data.carePackageCount,
      deliveryDate: data.deliveryDate,
    });
  }
  static createCarePackageSchedulePrisma(data: CreateCarePackageScheduleDto) {
    const created: Prisma.CarePackageScheduleCreateInput = {
      id: crypto.randomUUID(),
      carePackageCount: data.carePackageCount,
      deliveryDate: data.deliveryDate,
    };
    return created;
  }
  static updateCarePackageSchedulePrisma(data: UpdateCarePackageScheduleDto) {
    const updated: Prisma.CarePackageScheduleUpdateInput = {
      deliveryDate: data?.deliveryDate,
      carePackageCount: data?.carePackageCount,
    };
    return updated;
  }
}
