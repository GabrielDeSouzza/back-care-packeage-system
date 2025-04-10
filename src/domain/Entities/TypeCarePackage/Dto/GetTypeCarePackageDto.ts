import { AtLeastOneField } from 'src/domain/utils/Decorators/AtLeastOneField';

@AtLeastOneField<GetTypeCarePackageDto>(['id', 'name'], {
  message: 'Informe pelo menos o ID ou o nome do tipo de pacote',
})
export abstract class GetTypeCarePackageDto {
  id?: string;
  name?: string;
}
