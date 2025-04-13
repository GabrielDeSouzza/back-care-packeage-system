import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { GetUserUseCase } from 'src/app/UseCases/UserUseCase/GetUseUseCase';
import { UserRepository } from 'src/domain/Repositories/UserRepository';
import { PrismaService } from 'src/infra/database/PrismaService/prismaService';
import { UserPrismaServiceRepository } from 'src/infra/database/PrismaService/UserPrismaServiceRepository/userPrismaServiceRepository';
import { JwtStrategy } from './JwtStrategy';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
  ],
  providers: [
    {
      provide: UserRepository,
      useClass: UserPrismaServiceRepository,
    },
    PrismaService,
    GetUserUseCase,
    JwtStrategy,
    JwtService,
  ],
  exports: [JwtService],
})
export class GuardModule {}
