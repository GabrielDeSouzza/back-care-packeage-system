import { Field, ID, InputType, HideField } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { UpdateTypeCarePackageDto } from 'src/domain/Entities/TypeCarePackage/Dto/UpdateTypeCarePackageDto';

@InputType()
export abstract class UpdateTypeCarePackageInput
  implements UpdateTypeCarePackageDto
{
  @Field(() => ID)
  @IsUUID('all', { message: 'ID inválido' })
  @IsNotEmpty({ message: 'O ID é obrigatório' })
  id: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @Field(() => [String], { nullable: true })
  @IsString({ each: true, message: 'Os itens devem ser strings' })
  @IsOptional()
  deletedItensName?: string[];

  @Field(() => [String], { nullable: true })
  @IsString({ each: true, message: 'Os itens devem ser strings' })
  @IsOptional()
  itensNames?: string[];

  @HideField()
  updatedBy: string;
}
