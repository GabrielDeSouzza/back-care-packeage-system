import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CarePackageScheduleEntityProps } from 'src/domain/Entities/CarePackageSchedule/CarePackageScheduleEntity';

@ObjectType()
export class CarePackageScheduleModel
  implements CarePackageScheduleEntityProps
{
  @Field(() => ID)
  id: string;

  @Field(() => Date)
  deliveryDate: Date;

  @Field()
  carePackageCount: number;
}
