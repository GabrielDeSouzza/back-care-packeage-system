import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { GetUserDto } from 'src/domain/Entities/User/Dto/GetUserDto';
import { UserRepository } from 'src/domain/Repositories/UserRepository';

@Injectable()
export class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(request: GetUserDto) {
    if (Object.keys(request).length === 0)
      throw new BadRequestException('É NESSSARIO ENVIAR OS DADOS DE PESQUISA');
    const user = await this.userRepository.getUser(request);
    if (!user) throw new NotFoundException('Usuario Não Encontrado');

    return user;
  }
}
