import { ArgsType, Field } from '@nestjs/graphql';
import { IsEmail, IsString } from 'class-validator';
import { SignInDto } from 'src/domain/Dtos/SignInData';

@ArgsType()
export abstract class SingInInput implements SignInDto {
  @Field()
  @IsEmail({}, { message: 'Email inválido' })
  email: string;
  @Field()
  @IsString()
  password: string;
}
