import { CreateUserDto } from '../Entities/User/Dto/CreateUserDto';
import { GetUserDto } from '../Entities/User/Dto/GetUserDto';
import { UserEntity } from '../Entities/User/UserEntity';

export abstract class UserRepository {
  abstract createUser(user: CreateUserDto): Promise<UserEntity>;
  abstract getUser(request: GetUserDto): Promise<UserEntity>;
}
