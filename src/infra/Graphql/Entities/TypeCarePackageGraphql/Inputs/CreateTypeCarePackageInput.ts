import { Field, InputType, HideField } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateTypeCarePackageDto } from 'src/domain/Entities/TypeCarePackage/Dto/CreateTypeCarePackageDto';

@InputType()
export abstract class CreateTypeCarePackageInput
  implements CreateTypeCarePackageDto
{
  @Field()
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name: string;

  @HideField()
  createdBy: string;

  @HideField()
  updatedBy: string;

  @Field(() => [String])
  @IsString({ each: true, message: 'Os itens devem ser strings' })
  @IsNotEmpty({ message: 'É Necessario ao menos um item' })
  itensName: string[];
}
