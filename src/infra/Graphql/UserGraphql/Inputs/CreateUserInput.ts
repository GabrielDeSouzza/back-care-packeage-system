import { Field, HideField, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CreateUserDto } from 'src/domain/Entities/User/Dto/CreateUserDto';

@InputType()
export abstract class CreateUserInput implements CreateUserDto {
  @Field()
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name: string;

  @Field()
  @IsEmail({}, { message: 'Digite um email válido' })
  email: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'A senha é obrigatória' })
  password: string;

  @HideField()
  createdBy: string;

  @HideField()
  updatedBy: string;
}
