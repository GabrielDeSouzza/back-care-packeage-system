import { Field, ID, InputType } from '@nestjs/graphql';
import { IsString, IsUUID } from 'class-validator';
import { GetCarePackageItemDto } from 'src/domain/Entities/CarePackageItem/Dto/GetCarePackageItem';
import { AtLeastOneField } from 'src/domain/utils/Decorators/AtLeastOneField';

@InputType()
@AtLeastOneField<GetCarePackageItemDto>(['id', 'name'], {
  message: 'Informe pelo menos um ID ou nome',
})
export abstract class GetCarePackageItemInput implements GetCarePackageItemDto {
  @Field(() => ID, { nullable: true })
  @IsUUID('all', { message: 'Digite um ID válido' })
  id?: string;

  @Field({ nullable: true })
  @IsString()
  name?: string;
}
