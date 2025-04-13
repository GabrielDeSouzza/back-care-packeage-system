import { Field, HideField, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/CreateCarePackageItemDto';

@InputType()
export abstract class CreateCarePackageItemInput
  implements CreateCarePackageItemDto
{
  @Field()
  @IsString()
  @IsNotEmpty({ message: 'O nome do item do é obrigatório' })
  name: string;

  @HideField()
  createdBy: string;

  @HideField()
  updatedBy: string;
}
