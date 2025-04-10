import { AtLeastOneField } from 'src/domain/utils/Decorators/AtLeastOneField';
import { IsOptional, IsUUID } from 'class-validator';

@AtLeastOneField<GetChildDto>(['id'], {
  message: 'Informe pelo menos o Id',
})
export abstract class GetChildDto {
  @IsUUID('all', { message: 'Id inválido' })
  @IsOptional()
  id?: string;
}
