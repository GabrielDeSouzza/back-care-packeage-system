import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GetUserUseCase } from 'src/app/UseCases/UserUseCase/GetUseUseCase';
import { EncryptionUtils } from 'src/app/Utils/EncryptionUtils';
import { PayloadTokenDto } from 'src/domain/Dtos/PayloadLoginDto';
import { SignInDto } from 'src/domain/Dtos/SignInData';
import { SignInResponseDto } from 'src/domain/Dtos/SignInResponse';
import { SignInRepository } from 'src/domain/Repositories/SignInRepository';

@Injectable()
export class SignInUseCase implements SignInRepository {
  constructor(
    private getUserUseCase: GetUserUseCase,
    private jwtService: JwtService,
  ) {}
  async signIn(signRequest: SignInDto): Promise<SignInResponseDto> {
    const user = await this.getUserUseCase.execute({
      email: signRequest.email,
    });
    const passwordCompare = await EncryptionUtils.decryption(
      signRequest.password,
      user.password,
    );
    if (!passwordCompare) {
      throw new UnauthorizedException('Senha inválida');
    }
    const payload: PayloadTokenDto = {
      email: user.email,
      id: user.id,
      name: user.name,
    };

    const token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_KEY,
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    console.log('token', token);
    return { token: token, email: user.email, name: user.name };
  }
}
