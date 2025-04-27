import { Module } from '@nestjs/common';
import { CountTypeCarePackageUseCase } from 'src/app/UseCases/TypeCarePackageUseCases /CountTypeCarePackageUseCase';
import { CreateTypeCarePackageUseCase } from 'src/app/UseCases/TypeCarePackageUseCases /CreateTypeCarePackageUseCase';
import { GetAllTypeCarePackageUseCase } from 'src/app/UseCases/TypeCarePackageUseCases /GetAllTypeCarePackageUseCase';
import { GetTypeCarePackageUseCase } from 'src/app/UseCases/TypeCarePackageUseCases /GetTypeCarePackageUse';
import { UpdateTypeCarePackageUseCase } from 'src/app/UseCases/TypeCarePackageUseCases /UpdateTypeCarePackageUseCase';
import { TypeCarePackageRepository } from 'src/domain/Repositories/TypeCarePackageRepository';
import { PrismaService } from 'src/infra/database/PrismaService/prismaService';
import { TypeCarePackagePrismaServiceRepository } from 'src/infra/database/PrismaService/TypeCarePackageRepository/TypeCarePackagePrismaServiceRepository';
import { TypeCarePackageResolver } from './TypeCarePackageResolver';
import { CarePackageItemModule } from '../CarePackageItemGraphql/CarePackageItemModule';

@Module({
  imports: [CarePackageItemModule],
  providers: [
    {
      provide: TypeCarePackageRepository,
      useClass: TypeCarePackagePrismaServiceRepository,
    },
    PrismaService,
    GetTypeCarePackageUseCase,
    CreateTypeCarePackageUseCase,
    UpdateTypeCarePackageUseCase,
    TypeCarePackageResolver,
    CountTypeCarePackageUseCase,
    GetAllTypeCarePackageUseCase,
  ],
})
export class TypeCarePackageModule {}
