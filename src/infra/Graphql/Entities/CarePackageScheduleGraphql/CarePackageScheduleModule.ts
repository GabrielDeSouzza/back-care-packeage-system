import { Module } from '@nestjs/common';
import { CountCarePackageScheduleUseCase } from 'src/app/UseCases/CarePackageScheduleUseCases/CountCarePackageScheduleUseCase';
import { CreateCarePackageScheduleUseCase } from 'src/app/UseCases/CarePackageScheduleUseCases/CreateCarePackageScheduleUseCase';
import { GetAllCarePackageScheduleUseCase } from 'src/app/UseCases/CarePackageScheduleUseCases/GetAllCarePackageScheduleUseCase';
import { GetCarePackageScheduleUseCase } from 'src/app/UseCases/CarePackageScheduleUseCases/GetCarePackageScheduleUse';
import { UpdateCarePackageScheduleUseCase } from 'src/app/UseCases/CarePackageScheduleUseCases/UpdateCarePackageScheduleUseCase';
import { CarePackageScheduleRepository } from 'src/domain/Repositories/CarePackageScheduleRepository';
import { CarePackageSchedulePrismaServiceRepository } from 'src/infra/database/PrismaService/CarePackageScheduleRepository/CarePackageSchedulePrismaServiceRepository';
import { PrismaService } from 'src/infra/database/PrismaService/prismaService';
import { CarePackageScheduleResolver } from './CarePackageScheduleResolver';

@Module({
  providers: [
    {
      provide: CarePackageScheduleRepository,
      useClass: CarePackageSchedulePrismaServiceRepository,
    },
    PrismaService,
    GetCarePackageScheduleUseCase,
    CreateCarePackageScheduleUseCase,
    UpdateCarePackageScheduleUseCase,
    CarePackageScheduleResolver,
    CountCarePackageScheduleUseCase,
    GetAllCarePackageScheduleUseCase,
  ],
})
export class CarePackageScheduleModule {}
