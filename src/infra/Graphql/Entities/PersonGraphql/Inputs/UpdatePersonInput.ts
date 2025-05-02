import { Field, InputType, HideField } from '@nestjs/graphql';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import {
  UpdateChildrenRelationPersonDto,
  UpdatePersonDto,
} from 'src/domain/Entities/Person/Dto/UpdatePersonDto';
import { UpdateChildrenRelationPersonInput } from './ChildrenRelationPersonInput';

@InputType()
export abstract class UpdatePersonInput implements UpdatePersonDto {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @MinLength(3, { message: 'O nome deve ter pelo menos 3 caracteres' })
  name?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @MinLength(3, { message: 'O sobrenome  deve ter pelo menos 3 caracteres' })
  lastName?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  newDocument?: string;

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty({ message: 'O documento é obrigatório' })
  oldDocument: string;

  @Field({ nullable: true })
  @IsBoolean()
  @IsOptional()
  hasChild?: boolean;

  @Field({ nullable: true })
  @IsDate({ message: 'Data de nascimento inválida' })
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
