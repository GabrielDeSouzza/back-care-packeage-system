import { Injectable } from '@nestjs/common';
import { GetUserDto } from 'src/domain/Entities/User/Dto/GetUserDto';
import { UserEntity } from 'src/domain/Entities/User/UserEntity';
import { UserRepository } from 'src/domain/Repositories/UserRepository';
import { UserMapper } from '../mappers/UserMapper/UserMapper';
import { PrismaService } from '../prismaService';
@Injectable()
export class UserPrismaServiceRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  async createUser(user: UserEntity): Promise<UserEntity> {
    const dataPrisma = await this.prisma.user.create({
      data: UserMapper.createUserPrisma(user),
    });
    return UserMapper.prismaToEntity(dataPrisma);
  }
  async getUser(request: GetUserDto): Promise<UserEntity> {
    const data = await this.prisma.user.findFirst({
      where: {
        OR: [{ id: request.id }, { email: request.email }],
      },
    });
    if (!data) return undefined;
    return UserMapper.prismaToEntity(data);
  }
}
