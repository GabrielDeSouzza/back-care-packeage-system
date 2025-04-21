import { ArgsType, Field } from '@nestjs/graphql';
import { CountCarePackageScheduleDTO } from 'src/domain/Entities/CarePackageSchedule/Dto/WhereCarePackageScheduleDto';
import { CarePackageScheduleWhereInput } from 'src/infra/Graphql/generated/care-package-schedule/care-package-schedule-where.input';

@ArgsType()
export abstract class CountCarePackageScheduleInput
  implements CountCarePackageScheduleDTO
{
  @Field(() => CarePackageScheduleWhereInput, { nullable: true })
  where?: CarePackageScheduleWhereInput;
}
