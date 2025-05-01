import { Module } from '@nestjs/common';
import { GetAllChildUseCase } from 'src/app/UseCases/ChildUseCase/GetAllChildrenUseCase';
import { ChildRepository } from 'src/domain/Repositories/ChildRepository';
import { ChildPrismaServiceRepository } from 'src/infra/database/PrismaService/ChildRepository/ChildPrismaServiceRepository';
import { PrismaService } from 'src/infra/database/PrismaService/prismaService';

@Module({
  providers: [
    {
      provide: ChildRepository,
      useClass: ChildPrismaServiceRepository,
    },
    PrismaService,

    GetAllChildUseCase,
  ],
  exports: [ChildRepository, GetAllChildUseCase],
})
export class ChildModule {}
