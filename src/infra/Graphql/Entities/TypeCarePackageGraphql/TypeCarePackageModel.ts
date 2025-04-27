import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TypeCarePackageEntityProps } from 'src/domain/Entities/TypeCarePackage/TypeCarePackageEntity';

@ObjectType()
export class TypeCarePackageModel implements TypeCarePackageEntityProps {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  createdBy: string;

  @Field()
  updatedBy: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
  @Field(() => [String])
  itensName: string[];
}
