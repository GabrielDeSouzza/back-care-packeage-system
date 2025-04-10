import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { SignDto } from 'src/domain/Dtos/SingInData';

export abstract class SignValidationDto implements SignDto {
  @IsEmail({}, { message: 'EMAIL INVALIDO' })
  @IsNotEmpty({ message: 'DIGITE UM EMAIL' })
  email: string;
  @IsString()
  @IsNotEmpty({ message: 'DIGITE A SENHA' })
  password: string;
}
