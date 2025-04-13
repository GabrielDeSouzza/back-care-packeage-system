import { Injectable, ConflictException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { EncryptionUtils } from 'src/app/Utils/EncryptionUtils';
import { CreateUserDto } from 'src/domain/Entities/User/Dto/CreateUserDto';
import { UserEntity } from 'src/domain/Entities/User/UserEntity';
import { UserRepository } from 'src/domain/Repositories/UserRepository';

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(user: CreateUserDto) {
    user.email = user?.email?.toLowerCase();
    const emailInUse = await this.userRepository.getUser({
      email: user.email,
    });

    if (emailInUse) {
      throw new ConflictException(`O EMAIL ${user.email} já esta em uso`);
    }
    const userEntity = new UserEntity({
      id: randomUUID(),
      createdAt: new Date(),
      email: user.email,
      updatedAt: new Date(),
      name: user.name,
      password: await EncryptionUtils.encryption(user.password),
    });
    const userCreated = this.userRepository.createUser(userEntity);
    return userCreated;
  }
}
