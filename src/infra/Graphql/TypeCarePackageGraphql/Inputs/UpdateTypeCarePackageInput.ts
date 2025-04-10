import { Field, ID, InputType, HideField } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

@InputType()
export abstract class UpdateTypeCarePackageInput {
  @Field(() => ID)
  @IsUUID('all', { message: 'ID inválido' })
  @IsNotEmpty({ message: 'O ID é obrigatório' })
  id: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @HideField()
  updatedBy: string;
}
