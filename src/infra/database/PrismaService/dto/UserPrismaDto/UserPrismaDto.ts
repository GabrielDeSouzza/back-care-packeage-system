import { Prisma, User as UserPrisma } from '@prisma/client';
import { UserEntity } from 'src/domain/Entities/User/UserEntity';

export class UserPrismaDto {
  public static PrismaToEntity(data: UserPrisma): UserEntity {
    const userEntity = new UserEntity({
      id: data.id,
      createdAt: data.createdAt,
      email: data.email,
      updatedAt: data.modified_at,
      name: data.name,
      password: data.password,
    });
    return userEntity;
  }
  public static CreateUserPrismaDto(data: UserEntity) {
    const prismaQuery: Prisma.UserCreateInput = {
      createdAt: new Date(),
      email: data.email,
      modified_at: new Date(),
      name: data.name,
      password: data.password,
    };
    return prismaQuery;
  }
}
