import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CarePackageItemEntityProps } from 'src/domain/Entities/CarePackageItem/CarePackageItemEntity';

@ObjectType()
export class CarePackageItemModel implements CarePackageItemEntityProps {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  createdBy: string;

  @Field()
  updatedBy: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
