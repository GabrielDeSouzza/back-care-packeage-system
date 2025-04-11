import { Module } from '@nestjs/common';
import { GetUserUseCase } from 'src/app/UseCases/UserUseCase/GetUseUseCase';
import { UserRepository } from 'src/domain/Repositories/UserRepository';
import { PrismaService } from 'src/infra/database/PrismaService/prismaService';
import { UserPrismaServiceRepository } from 'src/infra/database/PrismaService/UserPrismaServiceRepository/userPrismaServiceRepository';

@Module({
  imports: [],
  providers: [
    { provide: UserRepository, useClass: UserPrismaServiceRepository },
    GetUserUseCase,
    PrismaService,
  ],
})
export class UserModule {}
