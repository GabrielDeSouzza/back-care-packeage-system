import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsUUID } from 'class-validator';
import { GetUserDto } from 'src/domain/Entities/User/Dto/GetUserDto';
import { AtLeastOneField } from 'src/domain/utils/Decorators/AtLeastOneField';

@ArgsType()
@AtLeastOneField<GetUserInput>(['email', 'id'], {
  message: 'Informe pelo menos um Email ou Id',
})
@InputType()
export abstract class GetUserInput implements GetUserDto {
  @Field({ nullable: true })
  @IsEmail({}, { message: 'Digite um email válido' })
  @IsOptional()
  email?: string;

  @Field({ nullable: true })
  @IsUUID('all', { message: 'Digite um id válido' })
  @IsOptional()
  id?: string;
}
