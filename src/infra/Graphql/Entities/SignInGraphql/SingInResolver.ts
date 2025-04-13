import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SingInInput } from './SingInInput';
import { SingInRepository } from 'src/domain/Repositories/SingInRepository';
import { SingInResponseModel } from './SingInModel';

@Resolver(() => SingInResponseModel)
export class SingInResolver {
  constructor(private singInRepository: SingInRepository) {}
  @Mutation(() => SingInResponseModel)
  async singIn(@Args() data: SingInInput) {
    return this.singInRepository.signIn(data);
  }
}
