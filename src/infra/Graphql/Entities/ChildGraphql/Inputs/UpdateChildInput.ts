import { Field, InputType, ID, HideField } from '@nestjs/graphql';
import {
  IsDateString,
  IsOptional,
  IsString,
  IsUUID,
  IsNotEmpty,
  IsDate,
} from 'class-validator';

@InputType()
export abstract class UpdateChildInput {
  @Field(() => ID)
  @IsUUID('all', { message: 'ID inválido' })
  @IsNotEmpty({ message: 'É necessário fornecer o ID para atualizar' })
  id: string;

  @Field()
  @IsString()
  @IsOptional()
  gender?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  lastName?: string;

  @Field({ nullable: true })
  @IsDate({ message: 'Data de nascimento inválida' })
  @IsOptional()
  birthdayDate?: Date;

  @Field({ nullable: true })
  @IsUUID('all', { message: 'ID do responsável inválido' })
  @IsOptional()
  responsibleId?: string;

  @HideField()
  updatedBy: string;
}
