import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PersonEntityProps } from 'src/domain/Entities/Person/PersonEntity';

@ObjectType()
export class PersonModel implements PersonEntityProps {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  lastName: string;

  @Field()
  document: number;

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
}
