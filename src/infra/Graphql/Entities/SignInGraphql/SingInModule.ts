import { JwtService } from '@nestjs/jwt';

import { GetUserUseCase } from 'src/app/UseCases/UserUseCase/GetUseUseCase';
import { SignInRepository } from 'src/domain/Repositories/SignInRepository';
import { UserRepository } from 'src/domain/Repositories/UserRepository';
import { PrismaService } from 'src/infra/database/PrismaService/prismaService';
import { UserPrismaServiceRepository } from 'src/infra/database/PrismaService/UserPrismaServiceRepository/userPrismaServiceRepository';
import { SignInUseCase } from 'src/app/UseCases/SignInUseCase/SignInUseCase';
import { SignInResolver } from './SingInResolver';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    { provide: SignInRepository, useClass: SignInUseCase },
    { provide: UserRepository, useClass: UserPrismaServiceRepository },
    GetUserUseCase,
    JwtService,
    PrismaService,
    SignInResolver,
  ],
})
export class SignInModule {}
