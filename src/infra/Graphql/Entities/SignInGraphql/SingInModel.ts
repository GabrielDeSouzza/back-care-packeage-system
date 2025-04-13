import { Field, ObjectType } from '@nestjs/graphql';
import { SingInResponseDto } from 'src/domain/Dtos/SingInResponse';

@ObjectType()
export abstract class SingInResponseModel implements SingInResponseDto {
  @Field()
  token: string;
  @Field()
  email: string;
  @Field()
  name: string;
}
