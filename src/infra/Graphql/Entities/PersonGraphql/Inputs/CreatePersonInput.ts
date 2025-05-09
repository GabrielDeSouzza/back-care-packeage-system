import { Field, InputType, HideField } from '@nestjs/graphql';
import { IsBoolean, IsDate, IsNotEmpty, IsString } from 'class-validator';
import {
  CreateChildrenRelationPersonDto,
  CreatePersonDto,
} from 'src/domain/Entities/Person/Dto/CreatePersonDto';
import { CreateChildrenRelationPersonInput } from './ChildrenRelationPersonInput';

@InputType()
export abstract class CreatePersonInput implements CreatePersonDto {
  @Field()
  @IsString({ message: 'O nome deve ter pelo menos 3 Caracteres' })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'O sobrenome é obrigatório' })
  lastName: string;

  @Field()
  @IsString()
  document: string;

  @Field()
  @IsBoolean()
  hasChild: boolean;

  @Field()
  @IsDate({ message: 'Data de nascimento inválida' })
  birthdayDate: Date;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'O gênero é obrigatório' })
  gender: string;

  @HideField()
  createdBy: string;

  @HideField()
  updatedBy: string;

  @Field(() => [CreateChildrenRelationPersonInput], { nullable: true })
  children?: CreateChildrenRelationPersonDto[];
}
