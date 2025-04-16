import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SingInInput } from './SingInInput';
import { SignInRepository } from 'src/domain/Repositories/SignInRepository';
import { SingInResponseModel } from './SingInModel';

@Resolver(() => SingInResponseModel)
export class SingInResolver {
  constructor(private SignInRepository: SignInRepository) {}
  @Mutation(() => SingInResponseModel)
  async singIn(@Args() data: SingInInput) {
    return this.SignInRepository.signIn(data);
  }
}
