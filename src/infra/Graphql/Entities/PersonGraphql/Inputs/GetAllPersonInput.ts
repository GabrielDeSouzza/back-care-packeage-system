import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';
import { WherePersonRequestDTO } from 'src/domain/Entities/Person/Dto/WherePersonDto';
import { PersonOrderByWithRelationInput } from 'src/infra/Graphql/generated/person/person-order-by-with-relation.input';
import { PersonWhereInput } from 'src/infra/Graphql/generated/person/person-where.input';

@ArgsType()
export abstract class GetAllPersonInput implements WherePersonRequestDTO {
  @Field(() => PersonWhereInput, { nullable: true })
  where?: PersonWhereInput;
  @Field(() => PersonOrderByWithRelationInput, { nullable: true })
  sort?: PersonOrderByWithRelationInput;
  @Field(() => Int, { defaultValue: 25 })
  @Max(25)
  limit: number;
  @Field(() => Int, { defaultValue: 0 })
  @Min(0)
  offset: number;
}
