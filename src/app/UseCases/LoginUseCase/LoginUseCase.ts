import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EncryptionUtils } from 'src/app/Utils/EncryptionUtils';
import { LoginDataDto } from 'src/domain/Dtos/LoginData';
import { PayloadTokenDto } from 'src/domain/Dtos/PayloadLoginDto';
import { LoginRepository } from 'src/domain/Repositories/LoginRepository';
import { GetUserUseCase } from '../UserUseCase/GetUseUseCase';
import { SignValidationDto } from './Dto/SingInDto';

@Injectable()
export class LoginUseCase implements LoginRepository {
  constructor(
    private getUserUseCase: GetUserUseCase,
    private jwtService: JwtService,
  ) {}

  async Sign(SignRequest: SignValidationDto): Promise<LoginDataDto> {
    if (!SignRequest || !SignRequest.email || !SignRequest.password) {
      throw new BadRequestException('É Nessario enviar a Senha e Email');
    }
    const user = await this.getUserUseCase.execute({
      email: SignRequest.email,
    });
    if (
      !(await EncryptionUtils.decryption(SignRequest?.password, user?.password))
    ) {
      throw new UnauthorizedException('Acesso Negado');
    }

    const payload: PayloadTokenDto = {
      email: user.email,
      id: user.id,
    };

    return {
      token: await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_KEY,
        expiresIn: '1d',
      }),
    };
  }
}
