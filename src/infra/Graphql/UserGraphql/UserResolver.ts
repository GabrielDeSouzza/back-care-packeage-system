import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from './UserModel';
import { GetUserInput } from './Inputs/GetUseInput';
import { GetUserUseCase } from 'src/app/UseCases/UserUseCase/GetUseUseCase';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private getUserUseCase: GetUserUseCase) {}

  @Query(() => UserModel)
  async getUser(@Args() request: GetUserInput) {
    return await this.getUserUseCase.execute(request);
  }
}
