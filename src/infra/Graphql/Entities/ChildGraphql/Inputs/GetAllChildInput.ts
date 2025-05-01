import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';
import { WhereChildRequestDTO } from 'src/domain/Entities/Child/Dto/WhereChildDto';
import { ChildOrderByWithRelationInput } from 'src/infra/Graphql/generated/child/child-order-by-with-relation.input';
import { ChildWhereInput } from 'src/infra/Graphql/generated/child/child-where.input';

@ArgsType()
export abstract class GetAllCarePacakageItemInput
  implements WhereChildRequestDTO
{
  @Field(() => ChildWhereInput, { nullable: true })
  where?: ChildWhereInput;
  @Field(() => ChildOrderByWithRelationInput, { nullable: true })
  sort?: ChildOrderByWithRelationInput;
  @Field(() => Int, { defaultValue: 25 })
  @Max(25)
  limit: number;
  @Field(() => Int, { defaultValue: 0 })
  @Min(0)
  offset: number;
}
