import { Module } from '@nestjs/common';
import { CreateCarePackageItemUseCase } from 'src/app/UseCases/CarePackageItem/CreateCarePackageItemUseCase';
import { GetCarePackageItemUseCase } from 'src/app/UseCases/CarePackageItem/GetCarePackageItemUse';
import { UpdateCarePackageItemUseCase } from 'src/app/UseCases/CarePackageItem/UpdateCarePackageItemUseCase';
import { CarePackageItemRepository } from 'src/domain/Repositories/CarePackageItemRepository';
import { CarePackageItemPrismaServiceRepository } from 'src/infra/database/PrismaService/CarePackageItemRepository/CarePackageItemPrismaServiceRepository';
import { PrismaService } from 'src/infra/database/PrismaService/prismaService';
import { CarePackageItemResolver } from './CarePackageItemResolver';

@Module({
  providers: [
    {
      provide: CarePackageItemRepository,
      useClass: CarePackageItemPrismaServiceRepository,
    },
    PrismaService,
    GetCarePackageItemUseCase,
    CreateCarePackageItemUseCase,
    UpdateCarePackageItemUseCase,
    CarePackageItemResolver,
  ],
})
export class CarePackageItemModule {}
