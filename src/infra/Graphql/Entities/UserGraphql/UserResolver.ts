import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from './UserModel';
import { GetUserInput } from './Inputs/GetUseInput';
import { GetUserUseCase } from 'src/app/UseCases/UserUseCase/GetUseUseCase';
import { CreateUserInput } from './Inputs/CreateUserInput';
import { CreateUserUseCase } from 'src/app/UseCases/UserUseCase/CreateUserUseCase';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(
    private getUserUseCase: GetUserUseCase,
    private createUserUseCase: CreateUserUseCase,
  ) {}

  @Query(() => UserModel)
  async getUser(@Args() request: GetUserInput) {
    return await this.getUserUseCase.execute(request);
  }
  @Mutation(() => UserModel)
  async createUser(@Args('data') data: CreateUserInput) {
    return this.createUserUseCase.execute(data);
  }
}
