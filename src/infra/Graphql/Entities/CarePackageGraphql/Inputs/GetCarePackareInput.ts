import { Field, ID, InputType } from '@nestjs/graphql';
import { IsInt, IsOptional, IsUUID } from 'class-validator';
import { GetCarePackageDto } from 'src/domain/Entities/CarePackage/Dto/GetCarePackareDto';
import { AtLeastOneField } from 'src/domain/utils/Decorators/AtLeastOneField';

@AtLeastOneField<GetCarePackageDto>(['id', 'numberControl'], {
  message: 'Informe pelo menos um ID ou número de controle',
})
@InputType()
export abstract class GetCarePackageInput implements GetCarePackageDto {
  @Field(() => ID, { nullable: true })
  @IsUUID('all', { message: 'O ID deve ser um UUID válido' })
  @IsOptional()
  id?: string;

  @Field({ nullable: true })
  @IsInt({ message: 'O número de controle deve ser um número inteiro' })
  @IsOptional()
  numberControl?: number;
}
