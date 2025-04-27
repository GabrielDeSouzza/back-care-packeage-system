import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';
import { WhereTypeCarePackageRequestDTO } from 'src/domain/Entities/TypeCarePackage/Dto/WhereTypeCarePackageDto';
import { TypeCarePackageOrderByWithRelationInput } from 'src/infra/Graphql/generated/type-care-package/type-care-package-order-by-with-relation.input';
import { TypeCarePackageWhereInput } from 'src/infra/Graphql/generated/type-care-package/type-care-package-where.input';

@ArgsType()
export abstract class GetAllCarePacakageInput
  implements WhereTypeCarePackageRequestDTO
{
  @Field(() => TypeCarePackageWhereInput, { nullable: true })
  where?: TypeCarePackageWhereInput;
  @Field(() => TypeCarePackageOrderByWithRelationInput, { nullable: true })
  sort?: TypeCarePackageOrderByWithRelationInput;
  @Field(() => Int, { defaultValue: 25 })
  @Max(25)
  limit: number;
  @Field(() => Int, { defaultValue: 0 })
  @Min(0)
  offset: number;
}
