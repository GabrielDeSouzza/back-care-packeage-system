import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PersonEntityProps } from 'src/domain/Entities/Person/PersonEntity';
import { ChildModel } from '../ChildGraphql/ChildModel';

@ObjectType()
export class PersonModel implements PersonEntityProps {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  lastName: string;

  @Field()
  document: string;

  @Field()
  hasChild: boolean;

  @Field(() => Date)
  birthdayDate: Date;

  @Field()
  gender: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field()
  createdBy: string;

  @Field()
  updatedBy: string;

  @Field(() => [ChildModel], { nullable: true })
  Children?: [ChildModel] | null;
}
