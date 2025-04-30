import { Field, InputType, ID, HideField } from '@nestjs/graphql';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
import {
  UpdateChildrenRelationPersonDto,
  UpdatePersonDto,
} from 'src/domain/Entities/Person/Dto/UpdatePersonDto';
import { UpdateChildrenRelationPersonInput } from './ChildrenRelationPersonInput';

@InputType()
export abstract class UpdatePersonInput implements UpdatePersonDto {
  @Field(() => ID)
  @IsUUID('all', { message: 'ID inválido' })
  @IsNotEmpty({ message: 'É necessário fornecer o ID para atualizar' })
  id: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @Min(3, { message: 'O nome deve ter pelo menos 3 caracteres' })
  name?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @Min(3, { message: 'O sobrenome  deve ter pelo menos 3 caracteres' })
  lastName?: string;

  @Field({ nullable: true })
  @IsNumber()
  @IsOptional()
  newDocument?: number;

  @Field({ nullable: true })
  @IsNumber()
  @IsNotEmpty({ message: 'O documento é obrigatório' })
  oldDocument: number;

  @Field({ nullable: true })
  @IsBoolean()
  @IsOptional()
  hasChild?: boolean;

  @Field({ nullable: true })
  @IsDateString({}, { message: 'Data de nascimento inválida' })
  @IsOptional()
  birthdayDate?: Date;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  gender?: string;

  @HideField()
  updatedBy: string;

  @Field(() => [UpdateChildrenRelationPersonInput], { nullable: true })
  children?: UpdateChildrenRelationPersonDto[];

  @Field(() => [String], { nullable: true })
  @IsUUID('all', { each: true, message: 'ID inválido' })
  @IsOptional()
  deletedChildrenIds?: string[];
}
