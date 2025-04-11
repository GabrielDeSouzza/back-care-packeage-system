import { Module } from '@nestjs/common';
import { GetUserUseCase } from 'src/app/UseCases/UserUseCase/GetUseUseCase';
import { UserRepository } from 'src/domain/Repositories/UserRepository';
import { PrismaService } from 'src/infra/database/PrismaService/prismaService';
import { UserPrismaServiceRepository } from 'src/infra/database/PrismaService/UserPrismaServiceRepository/userPrismaServiceRepository';
import { UserResolver } from './UserResolver';

@Module({
  imports: [],
  providers: [
    { provide: UserRepository, useClass: UserPrismaServiceRepository },
    GetUserUseCase,
    PrismaService,
    UserResolver,
  ],
})
export class UserModule {}
