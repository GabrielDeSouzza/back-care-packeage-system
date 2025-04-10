import { Field, ID, InputType } from '@nestjs/graphql';
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { AtLeastOneField } from 'src/domain/utils/Decorators/AtLeastOneField';
import { GetTypeCarePackageDto } from 'src/domain/Entities/TypeCarePackage/Dto/GetTypeCarePackageDto';

@InputType()
@AtLeastOneField<GetTypeCarePackageDto>(['id', 'name'], {
  message: 'Informe pelo menos um ID ou nome',
})
export abstract class GetTypeCarePackageInput implements GetTypeCarePackageDto {
  @Field(() => ID, { nullable: true })
  @IsUUID('all', { message: 'ID inválido' })
  @IsOptional()
  id?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  name?: string;
}
