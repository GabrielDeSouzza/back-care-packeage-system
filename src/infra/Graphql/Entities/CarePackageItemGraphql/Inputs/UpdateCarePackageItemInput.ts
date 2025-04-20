import { Field, HideField, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { UpdateCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/UpdateCarePackageItemDto';

@InputType()
export abstract class UpdateCarePackageItemInput
  implements UpdateCarePackageItemDto
{
  @Field(() => ID)
  @IsNotEmpty({ message: 'O nome é obrigatório para atualização' })
  oldName: string;

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty({ message: 'O novo nome é obrigatório para atualização' })
  newName: string;

  @HideField()
  updatedBy: string;
}
