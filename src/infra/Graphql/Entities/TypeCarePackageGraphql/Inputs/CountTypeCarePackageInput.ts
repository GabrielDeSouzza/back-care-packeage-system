import { ArgsType, Field } from '@nestjs/graphql';
import { CountTypeCarePackageDTO } from 'src/domain/Entities/TypeCarePackage/Dto/WhereTypeCarePackageDto';
import { TypeCarePackageWhereInput } from 'src/infra/Graphql/generated/type-care-package/type-care-package-where.input';

@ArgsType()
export abstract class CountTypeCarePackageInput
  implements CountTypeCarePackageDTO
{
  @Field(() => TypeCarePackageWhereInput, { nullable: true })
  where?: TypeCarePackageWhereInput;
}
