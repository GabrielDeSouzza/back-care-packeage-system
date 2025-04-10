import { Field, HideField, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { UpdateCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/UpdateCarePackageItemDto';

@InputType()
export abstract class UpdateCarePackageItemInput
  implements UpdateCarePackageItemDto
{
  @Field(() => ID)
  @IsUUID('all', { message: 'Digite um ID válido' })
  @IsNotEmpty({ message: 'O ID é obrigatório para atualização' })
  id: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @HideField()
  updatedBy: string;
}
