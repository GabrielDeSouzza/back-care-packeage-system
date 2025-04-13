import { Field, HideField, InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';
import { UpdateUserDto } from 'src/domain/Entities/User/Dto/UpdateUserDto';

@InputType()
export abstract class UpdateUserInput implements UpdateUserDto {
  @Field()
  @IsUUID('all', {
    message: 'O ID do usuário é obrigatório e deve ser um UUID válido',
  })
  id: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsEmail({}, { message: 'Digite um email válido' })
  @IsOptional()
  email?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  password?: string;

  @HideField()
  createdBy: string;

  @HideField()
  updatedBy: string;
}
