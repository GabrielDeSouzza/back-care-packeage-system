import { Module } from '@nestjs/common';
import { PersonRepository } from 'src/domain/Repositories/PersonRepository';
import { PersonPrismaServiceRepository } from 'src/infra/database/PrismaService/PersonRepository/PersonPrismaServiceRepository';
import { PrismaService } from 'src/infra/database/PrismaService/prismaService';
import { PersonResolver } from './PersonResolver';
import { CreatePersonUseCase } from 'src/app/UseCases/PersonUseCases/CreatePersonUseCase';
import { GetPersonUseCase } from 'src/app/UseCases/PersonUseCases/GetPersonUse';
import { UpdatePersonUseCase } from 'src/app/UseCases/PersonUseCases/UpdatePersonUseCase';
import { CountPersonUseCase } from 'src/app/UseCases/PersonUseCases/CountPersonUseCase';
import { GetAllPersonUseCase } from 'src/app/UseCases/PersonUseCases/GetAllPersonUseCase';

@Module({
  providers: [
    {
      provide: PersonRepository,
      useClass: PersonPrismaServiceRepository,
    },
    PrismaService,
    GetPersonUseCase,
    CreatePersonUseCase,
    UpdatePersonUseCase,
    PersonResolver,
    CountPersonUseCase,
    GetAllPersonUseCase,
  ],
  exports: [PersonRepository, GetPersonUseCase, GetAllPersonUseCase],
})
export class PersonModule {}
