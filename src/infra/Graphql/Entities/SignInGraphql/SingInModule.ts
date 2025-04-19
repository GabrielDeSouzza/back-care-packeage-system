import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { GetUserUseCase } from 'src/app/UseCases/UserUseCase/GetUseUseCase';
import { SignInRepository } from 'src/domain/Repositories/SignInRepository';
import { UserRepository } from 'src/domain/Repositories/UserRepository';
import { PrismaService } from 'src/infra/database/PrismaService/prismaService';
import { UserPrismaServiceRepository } from 'src/infra/database/PrismaService/UserPrismaServiceRepository/userPrismaServiceRepository';
import { SingInResolver } from './SingInResolver';
import { SignInUseCase } from 'src/app/UseCases/SignInUseCase/SignInUseCase';

@Module({
  providers: [
    { provide: SignInRepository, useClass: SignInUseCase },
    { provide: UserRepository, useClass: UserPrismaServiceRepository },
    GetUserUseCase,
    JwtService,
    PrismaService,
    SingInResolver,
  ],
})
export class SingInModule {}
