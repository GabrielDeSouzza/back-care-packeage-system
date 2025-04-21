import { ArgsType, Field } from '@nestjs/graphql';
import { CountCarePackageItemDTO } from 'src/domain/Entities/CarePackageItem/Dto/WhereCarePacakageItemDto';
import { CarePackageItemWhereInput } from 'src/infra/Graphql/generated/care-package-item/care-package-item-where.input';

@ArgsType()
export abstract class CountCarePackageItemInput
  implements CountCarePackageItemDTO
{
  @Field(() => CarePackageItemWhereInput, { nullable: true })
  where?: CarePackageItemWhereInput;
}
