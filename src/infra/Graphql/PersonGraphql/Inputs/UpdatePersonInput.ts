import { Field, InputType, ID, HideField } from '@nestjs/graphql';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

@InputType()
export abstract class UpdatePersonInput {
  @Field(() => ID)
  @IsUUID('all', { message: 'ID inválido' })
  @IsNotEmpty({ message: 'É necessário fornecer o ID para atualizar' })
  id: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  lastName?: string;

  @Field({ nullable: true })
  @IsNumber()
  @IsOptional()
  document?: number;

  @Field({ nullable: true })
  @IsBoolean()
  @IsOptional()
  hasChild?: boolean;

  @Field({ nullable: true })
  @IsDateString({}, { message: 'Data de nascimento inválida' })
  @IsOptional()
  dateBirth?: Date;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  gender?: string;

  @HideField()
  updatedBy: string;
}
