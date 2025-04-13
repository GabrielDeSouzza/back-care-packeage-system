import { Field, InputType, HideField } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export abstract class CreateTypeCarePackageInput {
  @Field()
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name: string;

  @HideField()
  createdBy: string;

  @HideField()
  updatedBy: string;
}
