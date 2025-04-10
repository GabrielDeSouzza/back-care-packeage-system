import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ChildEntityProps } from 'src/domain/Entities/Child/ChildEntity';

@ObjectType()
export class ChildModel implements ChildEntityProps {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  lastName: string;

  @Field(() => Date)
  dateBirh: Date;

  @Field(() => ID)
  responsibleId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field()
  createdBy: string;

  @Field()
  updatedBy: string;
}
