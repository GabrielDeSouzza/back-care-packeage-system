import { Injectable } from '@nestjs/common';
import { GetUserDto } from 'src/domain/Entities/User/Dto/GetUserDto';
import { UserEntity } from 'src/domain/Entities/User/UserEntity';
import { UserRepository } from 'src/domain/Repositories/UserRepository';
import { UserPrismaDto } from '../dto/UserPrismaDto/UserPrismaDto';
import { PrismaService } from '../prismaService';
@Injectable()
export class UserPrismaServiceRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  async createUser(user: UserEntity): Promise<UserEntity> {
    const dataPrisma = await this.prisma.user.create({
      data: UserPrismaDto.CreateUserPrismaDto(user),
    });
    return UserPrismaDto.PrismaToEntity(dataPrisma);
  }
  async getUser(request: GetUserDto): Promise<UserEntity> {
    const data = await this.prisma.user.findFirst({
      where: {
        OR: [{ id: request.id }, { email: request.email }],
      },
    });
    if (!data) return undefined;
    return UserPrismaDto.PrismaToEntity(data);
  }
}
