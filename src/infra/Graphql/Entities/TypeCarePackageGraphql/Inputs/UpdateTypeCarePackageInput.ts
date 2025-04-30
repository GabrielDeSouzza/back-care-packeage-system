import { Field, InputType, HideField } from '@nestjs/graphql';
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { UpdateTypeCarePackageDto } from 'src/domain/Entities/TypeCarePackage/Dto/UpdateTypeCarePackageDto';

@InputType()
export abstract class UpdateTypeCarePackageInput
  implements UpdateTypeCarePackageDto
{
  @Field({ nullable: true })
  @IsUUID('all', { message: 'ID inválido' })
  @IsOptional()
  id?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  newName?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  oldName?: string;

  @Field(() => [String], { nullable: true })
  @IsString({ each: true, message: 'Os itens devem ser strings' })
  @IsOptional()
  deletedItensName?: string[];

  @Field(() => [String], { nullable: true })
  @IsString({ each: true, message: 'Os itens devem ser strings' })
  @IsOptional()
  itensName?: string[];

  @HideField()
  updatedBy: string;
}
