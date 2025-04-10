import { Field, HideField, ObjectType } from '@nestjs/graphql';
import { UserEntityProps } from 'src/domain/Entities/User/UserEntity';

@ObjectType()
export abstract class UserModel implements UserEntityProps {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  email: string;
  @HideField()
  password: string;
  @Field(() => Date)
  createdAt: Date;
  @Field(() => Date)
  updatedAt: Date;
}
