import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';
import { WhereCarePackageScheduleRequestDTO } from 'src/domain/Entities/CarePackageSchedule/Dto/WhereCarePackageScheduleDto';
import { CarePackageScheduleOrderByWithRelationInput } from 'src/infra/Graphql/generated/care-package-schedule/care-package-schedule-order-by-with-relation.input';
import { CarePackageScheduleWhereInput } from 'src/infra/Graphql/generated/care-package-schedule/care-package-schedule-where.input';

@ArgsType()
export abstract class GetAllCarePackageScheduleInput
  implements WhereCarePackageScheduleRequestDTO
{
  @Field(() => CarePackageScheduleWhereInput, { nullable: true })
  where?: CarePackageScheduleWhereInput;
  @Field(() => CarePackageScheduleOrderByWithRelationInput, { nullable: true })
  sort?: CarePackageScheduleOrderByWithRelationInput;
  @Field(() => Int, { defaultValue: 25 })
  @Max(25)
  limit: number;
  @Field(() => Int, { defaultValue: 0 })
  @Min(0)
  offset: number;
}
