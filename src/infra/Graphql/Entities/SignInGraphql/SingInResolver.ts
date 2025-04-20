import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { SignInRepository } from 'src/domain/Repositories/SignInRepository';
import { SignInResponseModel } from './SingInModel';
import { SignInInput } from './SingInInput';


@Resolver(() => SignInResponseModel)
export class SignInResolver {
  constructor(private SignInRepository: SignInRepository) {}
  @Mutation(() => SignInResponseModel)
  async signIn(@Args() data: SignInInput) {
    return this.SignInRepository.signIn(data);
  }
}
