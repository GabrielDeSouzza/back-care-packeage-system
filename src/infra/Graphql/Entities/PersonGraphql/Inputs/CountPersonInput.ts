import { ArgsType, Field } from '@nestjs/graphql';
import { CountPersonDTO } from 'src/domain/Entities/Person/Dto/WherePersonDto';
import { PersonWhereInput } from 'src/infra/Graphql/generated/person/person-where.input';

@ArgsType()
export abstract class CountPersonInput implements CountPersonDTO {
  @Field(() => PersonWhereInput, { nullable: true })
  where?: PersonWhereInput;
}
