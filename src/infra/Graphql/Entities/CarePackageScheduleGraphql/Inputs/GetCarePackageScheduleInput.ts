import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDateString, IsUUID } from 'class-validator';
import { GetCarePackageScheduleDto } from 'src/domain/Entities/CarePackageSchedule/Dto/GetCarePackageScheduleDto';
import { AtLeastOneField } from 'src/domain/utils/Decorators/AtLeastOneField';

@InputType()
@AtLeastOneField<GetCarePackageScheduleDto>(['id'], {
  message: 'Informe pelo menos um ID',
})
export abstract class GetCarePackageScheduleInput
  implements GetCarePackageScheduleDto
{
  @Field(() => ID, { nullable: true })
  @IsUUID('all', { message: 'ID inválido' })
  id?: string;
  @Field({ nullable: true })
  @IsDateString({}, { message: 'Data de entrega inválida' })
  deliveryDate?: Date;
}
