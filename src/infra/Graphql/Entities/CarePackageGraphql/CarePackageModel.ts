import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { CarePackageEntityProps } from 'src/domain/Entities/CarePackage/CarePackageEntity';

@ObjectType()
export class CarePackageModel implements CarePackageEntityProps {
  @Field(() => ID)
  id: string;

  @Field(() => Int)
  numberControl: number;

  @Field(() => ID)
  typeCarePackageId: string;

  @Field(() => ID)
  personId: string;

  @Field(() => ID)
  carePackageScheduleId: string;

  @Field()
  createdBy: string;

  @Field()
  updatedBy: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
