import { Field, InputType, HideField } from '@nestjs/graphql';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

@InputType()
export abstract class CreatePersonInput {
  @Field()
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'O sobrenome é obrigatório' })
  lastName: string;

  @Field()
  @IsNumber()
  document: number;

  @Field()
  @IsBoolean()
  hasChild: boolean;

  @Field()
  @IsDateString({}, { message: 'Data de nascimento inválida' })
  dateBirth: Date;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'O gênero é obrigatório' })
  gender: string;

  @HideField()
  createdBy: string;

  @HideField()
  updatedBy: string;
}
