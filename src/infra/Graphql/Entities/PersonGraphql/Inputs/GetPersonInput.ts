import { Field, ID, InputType } from '@nestjs/graphql';
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { AtLeastOneField } from 'src/domain/utils/Decorators/AtLeastOneField';
import { GetPersonDto } from 'src/domain/Entities/Person/Dto/GetPersonDto';

@InputType()
@AtLeastOneField<GetPersonDto>(['id', 'document'], {
  message: 'Informe pelo menos um ID ou número de documento',
})
export abstract class GetPersonInput implements GetPersonDto {
  @Field(() => ID, { nullable: true })
  @IsUUID('all', { message: 'ID inválido' })
  id?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  document?: string;
}
