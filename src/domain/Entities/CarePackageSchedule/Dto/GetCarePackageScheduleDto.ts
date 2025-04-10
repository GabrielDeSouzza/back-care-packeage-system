import { AtLeastOneField } from 'src/domain/utils/Decorators/AtLeastOneField';

@AtLeastOneField<GetCarePackageScheduleDto>(['id', 'deliveryDate'], {
  message: 'Informe pelo menos um Id ou Data de Entrega',
})
export abstract class GetCarePackageScheduleDto {
  id?: string;
  deliveryDate?: Date;
}
