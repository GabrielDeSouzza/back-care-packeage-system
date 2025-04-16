import { Field, ObjectType } from '@nestjs/graphql';
import { SignInResponseDto } from 'src/domain/Dtos/SignInResponse';

@ObjectType()
export abstract class SingInResponseModel implements SignInResponseDto {
  @Field()
  token: string;
  @Field()
  email: string;
  @Field()
  name: string;
}
