import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';
import { WhereCarePackageItemRequestDTO } from 'src/domain/Entities/CarePackageItem/Dto/WhereCarePacakageItemDto';
import { CarePackageItemOrderByWithRelationInput } from 'src/infra/Graphql/generated/care-package-item/care-package-item-order-by-with-relation.input';
import { CarePackageItemWhereInput } from 'src/infra/Graphql/generated/care-package-item/care-package-item-where.input';

@ArgsType()
export abstract class GetAllCarePacakageItemInput
  implements WhereCarePackageItemRequestDTO
{
  @Field(() => CarePackageItemWhereInput, { nullable: true })
  where?: CarePackageItemWhereInput;
  @Field(() => CarePackageItemOrderByWithRelationInput, { nullable: true })
  sort?: CarePackageItemOrderByWithRelationInput;
  @Field(() => Int, { defaultValue: 25 })
  @Max(25)
  limit: number;
  @Field(() => Int, { defaultValue: 0 })
  @Min(0)
  offset: number;
}
